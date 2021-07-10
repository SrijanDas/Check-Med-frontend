import React, { useState, useRef } from "react";
import "./ShopCreate.css";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import axios from "../../helpers/axios";
import { useDispatch } from "react-redux";
import {
  loadingStart,
  loadingSuccess,
} from "../../store/actions/loadingActions";

function ShopCreate(props) {
  const [formData, setFormData] = useState({
    shopName: "",
    address: "",
    state: "",
    district: "",
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

    try {
      const res = await axios.post("/shop/create/", formData);
      console.log(res.data);
      props.setShop(res.data);
    } catch (error) {
      console.log(error);
    }

    timer.current = setTimeout(() => {
      dispatch(loadingSuccess());
    }, 1000);
  };
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Let's setup your shop
      </Typography>
      <Card className="shopCreate__card">
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
              variant="outlined"
              margin="normal"
              type="text"
              required
              fullWidth
              label="State"
              name="state"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              required
              fullWidth
              label="District"
              name="district"
              onChange={handleChange}
            />
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
            <Button type="submit" variant="contained" color="primary">
              Done
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
}

export default ShopCreate;
