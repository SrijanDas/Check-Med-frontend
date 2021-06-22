import React, { useState } from "react";
import "./Home.css";
import ShopCard from "../../components/ShopCard/ShopCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../helpers/axios";
import { Button, Form } from "react-bootstrap";

function Home() {
  const [medicineName, setMedicineName] = useState("");
  const [query, setQuery] = useState("");

  const [cards, setCards] = useState([]);
  const [showHeader, setShowHeader] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = {
      query: query.toLowerCase(),
      medicine_name: medicineName.toLowerCase(),
    };
    try {
      const response = await axios.post("/search", formData);
      setShowHeader(true);
      setCards(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="homePage">
      <Container fluid="sm">
        <h2 className="searchForm__heading">Search for a medicine...</h2>
        <Form className="mt-3" onSubmit={handleSearch}>
          <Form.Control
            type="text"
            className="mb-3"
            placeholder="Enter medicine name"
            required
            onChangeCapture={(e) => {
              setMedicineName(e.target.value);
            }}
          />
          <Form.Control
            type="number"
            className="pinInput mb-2"
            placeholder="Enter PIN"
            required
            onChangeCapture={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Button type="submit" variant="primary" className="btn-block">
            Search
          </Button>
        </Form>

        <h4 style={{ fontWeight: 400 }} className="mt-5">
          {showHeader
            ? cards.length
              ? ` ${medicineName.toUpperCase()} is available here..`
              : `${medicineName.toUpperCase()} is not available at your location`
            : ""}
        </h4>

        <Row xs={1} md={3} className="g-4">
          {cards.map((cardData, indx) => (
            <Col key={indx}>
              <ShopCard cardData={cardData} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
