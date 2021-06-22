import React from "react";
import "./Home.css";
import ShopCard from "../../components/ShopCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const cards = [20, 30, 4, 2, 45];

  return (
    <div className="homePage">
      <Container fluid="sm">
        <SearchForm />

        <h4 style={{ fontWeight: 400 }} className="mt-5">
          Medicine available here..
        </h4>

        <Row xs={1} md={3} className="g-4">
          {cards.map((stock, indx) => (
            <Col key={indx}>
              <ShopCard inStock={stock} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
