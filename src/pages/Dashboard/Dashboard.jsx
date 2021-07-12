import React, { useState } from "react";
import "./Dashboard.css";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardTools from "../../components/DashboardTools/DashboardTools";
import Inventory from "../../components/Inventory/Inventory";
import Sales from "../../components/Sales/Sales";
import Reports from "../../components/Reports/Reports";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Grid } from "@material-ui/core";

function Dashboard() {
  const [active, setActive] = useState();
  const shop = useSelector((state) => state.shop.shop);
  if (!shop) return <Redirect to="/shop" />;

  return (
    <div className="dashboardContainer">
      <Container className="dashboard" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <DashboardTools className="dashboard__tools" />
          </Grid>
          <Grid className="dashboard__right" item xs={10}>
            <div className="dashboard__rightCards">
              <DashboardCards active={active} setActive={setActive} />
            </div>
            <div className="dashboard__rightContent">
              {active === 0 ? (
                <Inventory />
              ) : active === 1 ? (
                <Sales />
              ) : active === 2 ? (
                <Reports />
              ) : (
                ""
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
