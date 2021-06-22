import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { Typography } from "@material-ui/core";

function SearchForm() {
  const [btnSelect, setBtnSelect] = useState("1");

  const buttons = [
    { name: "Search by PIN", value: "1" },
    { name: "Search by District", value: "2" },
    { name: "Search by Map", value: "3" },
  ];

  const SearchMethod = ({ searchMode }) => {
    if (searchMode === "3") {
      return (
        <>
          <h3>Coming Soon...</h3>
        </>
      );
    } else {
      return (
        <>
          <Form.Control
            type="text"
            className="mb-2"
            placeholder="Enter medicine name"
            required
          />
          {searchMode === "2" ? (
            <Form.Control type="text" placeholder="Select District" required />
          ) : (
            <Form.Control type="text" placeholder="Enter PIN" required />
          )}
          <Button variant="primary" className="mt-3 btn-block">
            Search
          </Button>
        </>
      );
    }
  };

  return (
    <>
      <Typography align="center" variant="h5">
        Search for a medicine...
      </Typography>
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
        <SearchMethod searchMode={btnSelect} />
      </Form>
    </>
  );
}

export default SearchForm;
