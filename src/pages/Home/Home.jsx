import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import ShopCard from "../../components/ShopCard/ShopCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Divider, Typography, Button, Container } from "@material-ui/core";

function Home() {
  const [cards, setCards] = useState([]);
  const [showHeader, setShowHeader] = useState(false);
  const [medicine, setMedicine] = useState({});

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [cards]);

  return (
    <div className="homePage ">
      <Container maxWidth="md">
        <div className="homepage__covidUpdatesBtnContainer">
          <Button
            variant="outlined"
            size="large"
            startIcon={<ErrorOutlineIcon color="secondary" />}
            className="homepage__covidUpdatesBtn"
          >
            Covid-19 Updates
          </Button>
        </div>

        <SearchForm
          setCards={setCards}
          setMedicine={setMedicine}
          setShowHeader={setShowHeader}
        />

        {/* cards */}
        <div className="homePage__shopCardsContainer" ref={scrollRef}>
          {showHeader ? (
            cards.length ? (
              <>
                <Divider style={{ marginBottom: "10px" }} />
                <Typography
                  variant="h6"
                  color="textSecondary"
                  style={{ marginBottom: "15px" }}
                  gutterBottom
                >
                  Showing results for: "<b>{medicine.name}</b>"
                </Typography>
                {/* <Typography variant="h6" gutterBottom>
                  Price: INR {medicine.price}
                </Typography> */}
              </>
            ) : (
              <div className="alertBox">
                <span
                  className="alertBox__text"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  This medicine is not available at your location{" "}
                  <SentimentDissatisfiedIcon />
                </span>
              </div>
            )
          ) : (
            ""
          )}

          {cards.map((cardData, indx) => (
            <ShopCard key={indx} cardData={cardData} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
