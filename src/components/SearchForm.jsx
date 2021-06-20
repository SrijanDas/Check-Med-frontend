import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";

function SearchForm() {
  const [btnSelect, setBtnSelect] = useState("1");

  const buttons = [
    { name: "Search by PIN", value: "1" },
    { name: "Search by District", value: "2" },
    { name: "Search by Map", value: "3" },
  ];

  return (
    <>
      <h3 className="mt-4">Search for a medicine...</h3>
      <Form>
        <ButtonGroup className="mt-3">
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              className="mb-3"
              variant={
                btnSelect === btn.value ? "primary" : "outline-secondary"
              }
              onClick={() => {
                setBtnSelect(btn.value);
              }}
            >
              {btn.name}
            </Button>
          ))}
        </ButtonGroup>
        <Form.Control
          type="text"
          className="mb-2"
          placeholder="Enter medicine name"
          required
        />
        {btnSelect === "1" ? (
          <Form.Control type="text" placeholder="Enter PIN" required />
        ) : btnSelect === "2" ? (
          <Form.Control type="text" placeholder="Select District" required />
        ) : (
          <h2>Coming Soon...</h2>
        )}

        <Button variant="primary" className="mt-3 btn-block">
          Search
        </Button>
      </Form>
    </>
  );
}

export default SearchForm;
