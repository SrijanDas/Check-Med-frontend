import React, { useState } from "react";
import "./Dashboard.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ReportIcon from "@material-ui/icons/Report";

function Dashboard() {
  const [active, setActive] = useState(1);
  return (
    <div className="dashboard">
      <div className="dashboard__shopDetails">
        <h3 className="dashboard__title">Shop Name</h3>
        <p>Contact No: 1234567</p>
        <p>Address: NG Road, State, District, PIN-123</p>
      </div>

      <div className="dashboard__tools">
        <div className="dashboard__cardsContainer">
          <div
            onClick={() => {
              setActive(0);
            }}
            className={`dashboard__card inventory ${
              active === 0 ? "active" : ""
            }`}
          >
            <span className="dashboard__cardTitle">
              <LocalMallIcon style={{ marginRight: "0.2rem" }} />
              Inventory
            </span>
            <div className="dashboard__cardInfo">
              <h1>20k</h1>
            </div>
            <span className="dashboard__cardFooter">
              Last Updated: 2 days ago
            </span>
          </div>

          <div
            onClick={() => {
              setActive(1);
            }}
            className={`dashboard__card sales ${active === 1 ? "active" : ""}`}
          >
            <span className="dashboard__cardTitle">
              <MonetizationOnIcon style={{ marginRight: "0.2rem" }} />
              Sales
            </span>
            <div className="dashboard__cardInfo">
              <h1>12k</h1>{" "}
              <p>
                2.5 <ArrowDownwardIcon />
              </p>
            </div>
            <span className="dashboard__cardFooter">
              Compared to last month
            </span>
          </div>

          <div
            onClick={() => {
              setActive(2);
            }}
            className={`dashboard__card reports ${
              active === 2 ? "active" : ""
            }`}
          >
            <span className="dashboard__cardTitle">
              <ReportIcon style={{ marginRight: "0.2rem" }} />
              Reports
            </span>
            <div className="dashboard__cardInfo">
              <h1>8</h1>
            </div>
            <span className="dashboard__cardFooter">6 resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
