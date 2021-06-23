import React, { useState } from "react";
import "./Home.css";
import ShopCard from "../../components/ShopCard/ShopCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import SearchForm from "../../components/SearchForm/SearchForm";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";

function Home() {
  const [cards, setCards] = useState([]);
  const [showHeader, setShowHeader] = useState(false);

  return (
    <div className="homePage">
      <Container fluid="sm">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <SearchForm setCards={setCards} setShowHeader={setShowHeader} />

            {/* cards */}
            {showHeader ? (
              cards.length ? (
                <h4 style={{ fontWeight: 400 }} className="mt-5">
                  Medicine is available here...
                </h4>
              ) : (
                <Alert variant="danger" className="my-4">
                  This medicine is not available at your location{" "}
                  <SentimentDissatisfiedIcon />
                </Alert>
              )
            ) : (
              ""
            )}
            <Row xs={1} md={3} className="g-4">
              {cards.map((cardData, indx) => (
                <Col key={indx}>
                  <ShopCard cardData={cardData} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
