import React, { useState } from "react";
import "./Dashboard.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import EditIcon from "@material-ui/icons/Edit";
import Inventory from "../../components/Inventory/Inventory";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import CssBaseline from "@material-ui/core/CssBaseline";

function Dashboard() {
  const [active, setActive] = useState();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className="dashboard">
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

          <div className="dashboard__tools">
            <h3 className="dashboard__header"> Dashboard</h3>
            <DashboardCards active={active} setActive={setActive} />
            {active === 0 ? <Inventory /> : ""}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
