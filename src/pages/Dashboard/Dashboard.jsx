import React, { useState } from "react";
import "./Dashboard.css";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardTools from "../../components/DashboardTools/DashboardTools";
import Inventory from "../../components/Inventory/Inventory";
import Sales from "../../components/Sales/Sales";
import Reports from "../../components/Reports/Reports";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const [active, setActive] = useState();
  const shop = useSelector((state) => state.shop.shop);
  if (!shop) return <Redirect to="/shop" />;

  return (
    <div className="dashboard">
      <DashboardTools className="dashboard__tools" />

      <div className="dashboard__right">
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
      </div>
    </div>
  );
}

export default Dashboard;
