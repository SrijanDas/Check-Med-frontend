import React, { useState } from "react";
import "./Dashboard.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Inventory from "../../components/Inventory/Inventory";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardTools from "../../components/DashboardTools/DashboardTools";

function Dashboard() {
  const [active, setActive] = useState();

  return (
    <>
      <Container maxWidth="lg">
        <div className="dashboard">
          <DashboardTools className="dashboard__tools" />
          <div className="dashboard__content">
            <Typography
              className="my-4"
              align="center"
              gutterBottom
              variant="h5"
            >
              Dashboard
            </Typography>
            <DashboardCards active={active} setActive={setActive} />
            <div className="dashboard__contentItem">
              {active === 0 ? <Inventory /> : ""}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
