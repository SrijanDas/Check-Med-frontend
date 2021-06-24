import React, { useState } from "react";
import "./Dashboard.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Inventory from "../../components/Inventory/Inventory";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardDrawer from "../../components/DashboardDrawer/DashboardDrawer";
import Grid from "@material-ui/core/Grid";
function Dashboard() {
  const [active, setActive] = useState();

  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid lg={2} md={2} sm={1} item>
            <DashboardDrawer />
          </Grid>
          <Grid lg={10} md={9} sm={11} item>
            <Typography
              className="my-4"
              align="center"
              gutterBottom
              variant="h5"
            >
              Dashboard
            </Typography>
            <DashboardCards
              className="dashboard__cards"
              active={active}
              setActive={setActive}
            />
            <div className="dashboard__tools">
              {active === 0 ? <Inventory /> : ""}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
