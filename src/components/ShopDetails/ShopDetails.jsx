import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import "./ShopDetails.css";
import { Edit } from "@material-ui/icons";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditShop from "../EditShop";
import DeleteShop from "../DeleteShop";

function ShopDetails(props) {
  const shop = useSelector((state) => state.shop.shop);
  const [editShopOpen, setEditShopOpen] = useState(false);
  const [deleteShopOpen, setDeleteShopOpen] = useState(false);

  return (
    <div className="shopDetails" style={{ padding: "1rem" }}>
      <Card className="shop__card">
        <CardContent>
          <h3 className="dashboard__shopName">{shop.name}</h3>
          <p>Contact No: {shop.phone}</p>
          <p>
            Address: {shop.address}, {shop.state}, {shop.district}, PIN-
            {shop.pincode}
          </p>
        </CardContent>
        {props.showBtns ? (
          <CardActions>
            <Button
              onClick={() => {
                setEditShopOpen(true);
                setDeleteShopOpen(false);
              }}
              startIcon={<Edit />}
              color="primary"
              variant="outlined"
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteOutlineIcon />}
              color="secondary"
              variant="outlined"
              onClick={() => {
                setDeleteShopOpen(true);
                setEditShopOpen(false);
              }}
            >
              Delete
            </Button>
          </CardActions>
        ) : (
          ""
        )}
      </Card>
      {editShopOpen ? <EditShop /> : ""}
      {deleteShopOpen ? (
        <DeleteShop setDeleteShopOpen={setDeleteShopOpen} />
      ) : (
        ""
      )}
    </div>
  );
}

export default ShopDetails;
