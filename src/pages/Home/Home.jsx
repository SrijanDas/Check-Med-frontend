import React, { useState } from "react";
import "./Home.css";
import ShopCard from "../../components/ShopCard/ShopCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "../../helpers/axios";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";

function Home() {
  const [medicineName, setMedicineName] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const [showHeader, setShowHeader] = useState(false);
  const [cards, setCards] = useState([]);

  const [btnSelect, setBtnSelect] = useState("1");

  const buttons = [
    { name: "Search by PIN", value: "1" },
    { name: "Search by District", value: "2" },
    { name: "Search by Map", value: "3" },
  ];

  const clearStates = () => {
    setError(false);
    setCards([]);
    setShowHeader(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = {
      queryType: btnSelect,
      query: query.toLowerCase(),
      medicine_name: medicineName.toLowerCase(),
    };
    try {
      const response = await axios.post("/search", formData);
      console.log(response.data);
      setShowHeader(true);
      setCards(response.data);
      setError(false);
    } catch (error) {
      setCards([]);
      setShowHeader(false);
      setError(true);
    }
  };

  return (
    <div className="homePage">
      <Container fluid="sm">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h2 className="searchForm__heading">Search for a medicine...</h2>

            {/* search method button */}
            <ButtonGroup className="mt-3 mb-0">
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  className="mb-3"
                  variant={
                    btnSelect === btn.value ? "primary" : "outline-secondary"
                  }
                  onClick={() => {
                    setBtnSelect(btn.value);
                    clearStates();
                  }}
                >
                  {btn.name}
                </Button>
              ))}
            </ButtonGroup>

            {/* Search form */}
            {btnSelect === "3" ? (
              <h3>Coming Soon...</h3>
            ) : (
              <Form className="" onSubmit={handleSearch}>
                <Form.Control
                  type="text"
                  className="mb-3"
                  placeholder="Enter medicine name"
                  required
                  onChangeCapture={(e) => {
                    setMedicineName(e.target.value);
                  }}
                />
                {btnSelect === "2" ? (
                  <Form.Control
                    type="text"
                    placeholder="Select District"
                    required
                  />
                ) : (
                  <Form.Control
                    type="number"
                    placeholder="Enter PIN"
                    required
                    onChangeCapture={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="btn-block mt-2"
                >
                  Search
                </Button>
              </Form>
            )}

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

            {/* if errors */}
            {error ? (
              <Alert
                variant="danger"
                onClose={() => setError(false)}
                dismissible
                className="my-4"
              >
                <Alert.Heading>
                  Something went wrong!{" "}
                  <SentimentDissatisfiedIcon fontSize="large" />
                </Alert.Heading>
                <p>Check the medicine name.</p>
              </Alert>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
