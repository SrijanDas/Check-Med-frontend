import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchForm() {
  return (
    <>
      <h3 className="mt-4">Search for a medicine...</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control size="lg" type="text" />
          </Col>
          <Col>
            <Button>Search</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default SearchForm;
