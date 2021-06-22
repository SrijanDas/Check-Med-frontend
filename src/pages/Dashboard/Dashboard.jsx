import React, { useState } from "react";
import "./Dashboard.css";
// import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Inventory from "../../components/Inventory/Inventory";
import DashboardCards from "../../components/DashboardCards/DashboardCards";

function Dashboard() {
  const [active, setActive] = useState();

  return (
    <div className="dashboard">
      <Container maxWidth="lg">
        <div className="dashboard__tools">
          <h3 className="dashboard__header"> Dashboard</h3>
          <DashboardCards active={active} setActive={setActive} />
          {active === 0 ? <Inventory /> : ""}
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
