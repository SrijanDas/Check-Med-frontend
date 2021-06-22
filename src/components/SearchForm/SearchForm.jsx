import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import "./SearchForm.css";

function SearchForm({
  handleSearch,
  medicineName,
  setMedicineName,
  query,
  setQuery,
}) {
  const [btnSelect, setBtnSelect] = useState("1");

  const buttons = [
    { name: "Search by PIN", value: "1" },
    { name: "Search by District", value: "2" },
    { name: "Search by Map", value: "3" },
  ];

  const SearchMethod = ({ searchMode, setMedicineName, setQuery }) => {
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
            onChangeCapture={(e) => {
              setMedicineName(e.target.value);
            }}
          />
          {searchMode === "2" ? (
            <Form.Control type="text" placeholder="Select District" required />
          ) : (
            <input
              type="text"
              placeholder="Enter PIN"
              required
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          )}
          <Button type="submit" variant="primary" className="mt-3 btn-block">
            Search
          </Button>
        </>
      );
    }
  };

  return (
    <>
      <h2 className="searchForm__heading">Search for a medicine...</h2>
      <Form
        onSubmit={(e) => {
          handleSearch(e);
        }}
      >
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
        <SearchMethod
          searchMode={btnSelect}
          setMedicineName={setMedicineName}
          setQuery={setQuery}
        />
      </Form>
    </>
  );
}

export default SearchForm;
