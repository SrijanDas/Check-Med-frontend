import React, { useState } from "react";
import axios from "../../helpers/axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { districts, stateNames } from "../../helpers/dummyData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SearchForm.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingStart,
  loadingSuccess,
} from "../../store/actions/loadingActions";

function SearchForm({ setCards, setShowHeader, setMedicine }) {
  const [medicineName, setMedicineName] = useState("");
  const [query, setQuery] = useState("");
  const [stateName, setStateName] = useState("West Bengal");
  const [district, setDistrict] = useState("Howrah");
  const [btnSelect, setBtnSelect] = useState("1");

  const isLoading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

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
    setShowHeader(false);
  };

  const handleSearch = async (e) => {
    dispatch(loadingStart());
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
    setQuery("");
    setMedicineName("");
    try {
      const response = await axios.post("/search", formData);
      setShowHeader(true);
      setCards(response.data.shops);
      setMedicine(response.data.medicine);
    } catch (error) {
      clearStates();
      toast.error("Something went wrong! ????", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch(loadingSuccess());
  };

  return (
    <div className="searchForm">
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        color="textSecondary"
      >
        Check availability of medicines and other healthcare products in your
        locality...
      </Typography>

      {/* search by buttons */}
      <div className="searchForm__buttonsContainer">
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            color="primary"
            variant={btnSelect === btn.value ? "contained" : "outlined"}
            onClick={() => {
              setBtnSelect(btn.value);
              clearStates();
            }}
          >
            {btn.name}
          </Button>
        ))}
      </div>

      {/* Search form */}
      {btnSelect === "3" ? (
        <Typography variant="h4" align="center">
          Coming Soon...
        </Typography>
      ) : (
        <form onSubmit={handleSearch}>
          <TextField
            className="searchForm__medNameInput"
            placeholder="Search for medicines and other healthcare products..."
            fullWidth
            variant="outlined"
            value={medicineName}
            onChange={(e) => {
              setMedicineName(e.target.value);
            }}
            autoFocus
            required
          />

          {btnSelect === "2" ? (
            <div className="searchForm__stateDistrictInputContainer">
              <TextField
                className="searchForm__stateInput"
                select
                value={stateName}
                onChange={handleStateNameChange}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your state"
                variant="outlined"
                fullWidth
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
                fullWidth
              >
                {districts.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
          ) : (
            <TextField
              label="Pincode"
              variant="outlined"
              type="number"
              value={query}
              placeholder="Enter PIN"
              required
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              fullWidth
            />
          )}

          <Button
            type="submit"
            color="primary"
            className="searchForm__searchBtn"
            disabled={isLoading}
            variant="contained"
          >
            {isLoading ? "Searching ..." : "Search"}
          </Button>
        </form>
      )}

      <ToastContainer className="toast" />
    </div>
  );
}

export default SearchForm;
