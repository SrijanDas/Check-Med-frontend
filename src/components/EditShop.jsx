import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  InputAdornment,
} from "@material-ui/core";

import { stateNames, districts } from "../helpers/dummyData";

function EditShop() {
  const shop = useSelector((state) => state.shop.shop);

  const [formData, setFormData] = useState({
    shopName: shop.name,
    phone: shop.phone,
    address: shop.address,
    stateName: shop.state,
    district: shop.district,
    pin: shop.pincode,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
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
              value={formData.shopName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Phone"
              type="number"
              onChange={handleChange}
              value={formData.phone}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91 </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="text"
              required
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <TextField
              select
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              fullWidth
              margin="normal"
              name="stateName"
              value={formData.stateName}
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
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              fullWidth
              name="district"
              value={formData.district}
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
              value={formData.pin}
              onChange={handleChange}
            />
          </CardContent>
          <CardActions className="shopCreate__cardActions">
            <Button fullWidth type="submit" variant="contained" color="primary">
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </div>
  );
}
export default EditShop;
