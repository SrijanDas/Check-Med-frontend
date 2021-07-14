import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import ShopCard from "../../components/ShopCard/ShopCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import Container from "@material-ui/core/Container";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import Button from "@material-ui/core/Button";

function Home() {
  const [cards, setCards] = useState([]);
  const [showHeader, setShowHeader] = useState(false);

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

        <SearchForm setCards={setCards} setShowHeader={setShowHeader} />

        {/* cards */}
        <div className="homePage__shopCardsContainer" ref={scrollRef}>
          {showHeader ? (
            cards.length ? (
              <h3 style={{ fontWeight: 400 }} className="header">
                Medicine is available here...
              </h3>
            ) : (
              <div className="alertBox">
                <span className="alertBox__text">
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
