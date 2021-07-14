import React from "react";
import "./Shop.css";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
} from "@material-ui/core";

import ShopCreate from "../../components/ShopCreate/ShopCreate";
import { useHistory } from "react-router-dom";

function ShopDetails() {
  const shop = useSelector((state) => state.shop.shop);

  const history = useHistory();

  const routeChange = () => {
    history.push("/dashboard");
  };

  return (
    <div className="shop">
      <Container className="shop__container" maxWidth="md">
        {shop ? (
          <Card className="shop__card">
            <CardContent>
              <h3 className="dashboard__shopName">{shop.name}</h3>
              <p>Contact No: 1234567</p>
              <p>
                Address: {shop.address}, {shop.state}, {shop.district}, PIN-
                {shop.pincode}
              </p>
            </CardContent>
            <CardActions className="shop__cardActions">
              <Button onClick={routeChange} variant="contained" color="primary">
                Go to Dashboard
              </Button>
              <Button variant="contained">Edit</Button>
              <Button variant="contained">Delete</Button>
            </CardActions>
          </Card>
        ) : (
          <ShopCreate />
        )}
      </Container>
    </div>
  );
}

export default ShopDetails;
