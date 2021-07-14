import React from "react";
import DashboardTools from "../../components/DashboardTools/DashboardTools";
import { Container, Grid } from "@material-ui/core";

function Orders() {
  return (
    <div className="dashboardContainer">
      <DashboardTools page={2} />

      <h1>Orders</h1>
    </div>
  );
}

export default Orders;
