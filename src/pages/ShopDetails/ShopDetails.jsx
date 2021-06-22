import React from "react";
import "./ShopDetails.css";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

function ShopDetails() {
  return (
    <div className="dashboard__shopDetailsBox">
      <div className="dashboard__shopDetails">
        <h3 className="dashboard__shopName">Shop Name</h3>
        <p>Contact No: 1234567</p>
        <p>Address: NG Road, State, District, PIN-123</p>
      </div>
      <Button
        startIcon={<EditIcon />}
        variant="outlined"
        className="dashboard__shopDetailsEditBtn"
      >
        Edit
      </Button>
    </div>
  );
}

export default ShopDetails;
