import React, { useState, useRef } from "react";
import "./ShopCreate.css";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingStart,
  loadingSuccess,
} from "../../store/actions/loadingActions";
import { stateNames, districts } from "../../helpers/dummyData";
import { createShop } from "../../store/actions/shopActions";

function ShopCreate(props) {
  const user = useSelector((state) => state.auth.user);

  const [formData, setFormData] = useState({
    shopName: "",
    address: "",
    stateName: "West Bengal",
    district: "Howrah",
    pin: "",
  });

  const dispatch = useDispatch();
  const timer = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loadingStart());
    await dispatch(createShop(user, formData));
    timer.current = setTimeout(() => {
      dispatch(loadingSuccess());
    }, 1000);
    window.location.reload();
  };
  return (
    <div>
      <Card className="shopCreate__card">
        <Typography
          className="shopCreate__cardHeader"
          variant="h4"
          align="center"
          gutterBottom
        >
          Let's setup your shop
        </Typography>
        <form className="shopCreate__form" onSubmit={handleSubmit}>
          <CardContent>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="shopName"
              label="Shop Name"
              type="text"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              required
              fullWidth
              label="Address"
              name="address"
              onChange={handleChange}
            />
            <TextField
              select
              value={formData.stateName}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              fullWidth
              name="stateName"
            >
              {stateNames.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>

            <TextField
              select
              margin="normal"
              value={formData.district}
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              fullWidth
              name="district"
            >
              {districts.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              margin="normal"
              type="number"
              required
              fullWidth
              label="PIN Code"
              name="pin"
              onChange={handleChange}
            />
          </CardContent>
          <CardActions className="shopCreate__cardActions">
            <Button fullWidth type="submit" variant="contained" color="primary">
              Create Shop
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
}

export default ShopCreate;
