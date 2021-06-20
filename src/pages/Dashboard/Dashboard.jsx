import React, { useState } from "react";
import "./Dashboard.css";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Inventory from "../../components/Inventory/Inventory";
import DashboardCards from "../../components/DashboardCards/DashboardCards";

function Dashboard() {
  const [active, setActive] = useState();

  return (
    <div className="dashboard">
      <div className="dashboard__shopDetailsBox">
        <div className="dashboard__shopDetails">
          <h3 className="dashboard__shopName">Shop Name</h3>
          <p>Contact No: 1234567</p>
          <p>Address: NG Road, State, District, PIN-123</p>
        </div>
        <Button
          startIcon={<EditIcon />}
          variant="contained"
          className="dashboard__shopDetailsEditBtn"
        >
          Edit
        </Button>
      </div>

      <div className="dashboard__tools">
        <h3 className="dashboard__header"> Dashboard</h3>
        <DashboardCards active={active} setActive={setActive} />
        {active === 0 ? <Inventory /> : ""}
      </div>
    </div>
  );
}

export default Dashboard;
