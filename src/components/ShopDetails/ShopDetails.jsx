import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import "./ShopDetails.css";
import { Edit } from "@material-ui/icons";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function ShopDetails(props) {
  const shop = useSelector((state) => state.shop.shop);

  return (
    <div style={{ padding: "1rem" }}>
      <Card className="shop__card">
        <CardContent>
          <h3 className="dashboard__shopName">{shop.name}</h3>
          <p>Contact No: 1234567</p>
          <p>
            Address: {shop.address}, {shop.state}, {shop.district}, PIN-
            {shop.pincode}
          </p>
        </CardContent>
        {props.showBtns ? (
          <CardActions>
            <Button startIcon={<Edit />} color="primary" variant="outlined">
              Edit
            </Button>
            <Button
              startIcon={<DeleteOutlineIcon />}
              color="secondary"
              variant="outlined"
            >
              Delete
            </Button>
          </CardActions>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
}

export default ShopDetails;
