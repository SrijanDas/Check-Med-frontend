import React, { useState, useEffect } from "react";
import "./DashboardCards.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ReportIcon from "@material-ui/icons/Report";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

function DashboardCards({ active, setActive }) {
  const [inventoryValue, setInventoryValue] = useState("N/A");
  const [salesTotal, setSalesTotal] = useState("N/A");
  const [reportsCount, setReportsCount] = useState("N/A");

  return (
    <div className="dashboard__cardsContainer">
      <Card
        onClick={() => {
          setActive(0);
        }}
        className={`dashboard__card inventory ${active === 0 ? "active" : ""}`}
      >
        <CardContent>
          <span className="dashboard__cardTitle">
            <LocalMallIcon style={{ marginRight: "0.2rem" }} />
            Inventory
          </span>
          <div className="dashboard__cardInfo">
            <h1>₹​ {inventoryValue}</h1>
          </div>
          <span className="dashboard__cardFooter">
            Last Updated: 2 days ago
          </span>
        </CardContent>
      </Card>

      <Card
        onClick={() => {
          setActive(1);
        }}
        className={`dashboard__card sales ${active === 1 ? "active" : ""}`}
      >
        <CardContent>
          <span className="dashboard__cardTitle">
            <MonetizationOnIcon style={{ marginRight: "0.2rem" }} />
            Sales
          </span>
          <div className="dashboard__cardInfo">
            <h1>₹​ {salesTotal} </h1>
            <p>
              -2.5% <ArrowDownwardIcon />
            </p>
          </div>
          <span className="dashboard__cardFooter">Compared to last month</span>
        </CardContent>
      </Card>

      <Card
        onClick={() => {
          setActive(2);
        }}
        className={`dashboard__card reports ${active === 2 ? "active" : ""}`}
      >
        <CardContent>
          <span className="dashboard__cardTitle">
            <ReportIcon style={{ marginRight: "0.2rem" }} />
            Reports
          </span>
          <div className="dashboard__cardInfo">
            <h1>{reportsCount}</h1>
          </div>
          <span className="dashboard__cardFooter">6 resolved</span>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardCards;
