import React, { useState } from "react";
import axios from "../../helpers/axios";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import TextField from "@material-ui/core/TextField";
import { districts, stateNames } from "../../dummyData";

function SearchForm({ setCards, setShowHeader }) {
  const [medicineName, setMedicineName] = useState("");
  const [query, setQuery] = useState("");
  const [errors, setErrors] = useState([]);
  const [stateName, setStateName] = useState("West Bengal");
  const [district, setDistrict] = useState("Howrah");
  const [btnSelect, setBtnSelect] = useState("1");

  const buttons = [
    { name: "Search by PIN", value: "1" },
    { name: "Search by District", value: "2" },
    { name: "Search by Map", value: "3" },
  ];

  const handleDistrictChange = (event) => {
    setDistrict(event.target.value);
  };

  const handleStateNameChange = (e) => {
    setStateName(e.target.value);
  };

  const clearStates = () => {
    setCards([]);
    setErrors([]);
    setShowHeader(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let formData = {};
    if (btnSelect === "1") {
      formData = {
        queryType: btnSelect,
        query: query.toLowerCase(),
        medicine_name: medicineName.toLowerCase(),
      };
    } else if (btnSelect === "2") {
      formData = {
        queryType: btnSelect,
        district: district,
        medicine_name: medicineName.toLowerCase(),
      };
    }
    try {
      const response = await axios.post("/search", formData);
      setShowHeader(true);
      setCards(response.data);
      setErrors([]);
    } catch (error) {
      setCards([]);
      setShowHeader(false);
      setErrors([...errors, error]);
    }
  };

  return (
    <>
      <h2 className="searchForm__heading">Search for a medicine...</h2>

      {/* search method button */}
      <ButtonGroup className="mt-3 mb-0">
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            className="mb-3"
            variant={btnSelect === btn.value ? "primary" : "outline-secondary"}
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
            autoFocus
          />
          {btnSelect === "2" ? (
            <>
              <TextField
                className="mr-3"
                id="outlined-select-currency-native"
                select
                value={stateName}
                onChange={handleStateNameChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your state"
                variant="outlined"
              >
                {stateNames.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>

              <TextField
                id="outlined-select-currency-native"
                select
                value={district}
                onChange={handleDistrictChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your district"
                variant="outlined"
              >
                {districts.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </>
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

          <Button type="submit" variant="primary" className="btn-block my-3">
            Search
          </Button>
        </Form>
      )}

      {/* if errors */}
      {errors.length
        ? errors.map((err, indx) => (
            <Alert
              show={true}
              key={indx}
              variant="danger"
              onClose={() => {
                console.log(errors);
                let temp = [...errors];
                temp.splice(indx, 1);
                setErrors(temp);
              }}
              dismissible
              className="my-4"
            >
              <Alert.Heading>
                Something went wrong!{" "}
                <SentimentDissatisfiedIcon fontSize="large" />
              </Alert.Heading>
              <p>
                {err.response.status} {err.response.statusText}
              </p>
            </Alert>
          ))
        : ""}
    </>
  );
}

export default SearchForm;
