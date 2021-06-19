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
        <Form.Control type="text" placeholder="Enter medicine name" />

        <ButtonGroup className="mt-3">
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              variant={btnSelect === btn.value ? "primary" : "outline-primary"}
              onClick={() => {
                setBtnSelect(btn.value);
              }}
            >
              {btn.name}
            </Button>
          ))}
        </ButtonGroup>
        <Button size="lg" variant="primary" className="mb-2">
          Search
        </Button>
      </Form>
      {btnSelect}
    </>
  );
}

export default SearchForm;
