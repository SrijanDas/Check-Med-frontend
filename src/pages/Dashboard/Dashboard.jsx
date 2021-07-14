import React, { useState } from "react";
import "./Dashboard.css";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardTools from "../../components/DashboardTools/DashboardTools";
import Inventory from "../../components/Inventory/Inventory";
import Sales from "../../components/Sales/Sales";
import Reports from "../../components/Reports/Reports";
import { Redirect } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import Orders from "../../components/Orders/Orders";
import ReportsPage from "../../components/ReportsPage/ReportsPage";
import Notifications from "../../components/Notifications/Notifications";

function Dashboard() {
  const [active, setActive] = useState();
  const [page, setPage] = useState(0);

  return (
    <div className="dashboardContainer">
      <Container className="dashboard" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <DashboardTools
              page={page}
              setPage={setPage}
              className="dashboard__tools"
            />
          </Grid>
          <Grid className="dashboard__right" item xs={10}>
            {page === 0 ? (
              <>
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
                </div>{" "}
              </>
            ) : page === 1 ? (
              <Redirect to="/shop" />
            ) : page === 2 ? (
              <Orders />
            ) : page === 3 ? (
              <Notifications />
            ) : page === 4 ? (
              <ReportsPage />
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
