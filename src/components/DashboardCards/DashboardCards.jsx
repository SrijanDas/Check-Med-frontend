import React, { useState, useEffect } from "react";
import "./DashboardCards.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ReportIcon from "@material-ui/icons/Report";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import axios from "../../helpers/axios";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import numberFormatter from "../../helpers/numberFormatter";
import { salesData as dummySalesData } from "../../helpers/dummyData";
import SyncIcon from "@material-ui/icons/Sync";

function DashboardCards({ active, setActive }) {
  const { id } = useSelector((state) => state.shop.shop);

  const [inventoryData, setInventoryData] = useState({});
  const [salesData, setSalesData] = useState({});
  const [reportsData, setReportsData] = useState({});

  const [updateData, setUpdateData] = useState(false);

  let salesTotal = 0;
  dummySalesData.forEach((s) => {
    salesTotal += s.sales;
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get(`/dashboard/${id}`);
        setInventoryData(res.data.inventory);
        setSalesData(res.data.sales);
        setReportsData(res.data.reports);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDashboardData();
  }, [id, updateData]);

  return (
    <div className="dashboard__cardsContainer">
      <Card
        onClick={() => {
          setActive(0);
        }}
        className={`dashboard__card inventory ${active === 0 ? "active" : ""}`}
      >
        <CardContent>
          <div className="dashboard__cardHeader">
            <span className="dashboard__cardTitle">
              <LocalMallIcon style={{ marginRight: "0.2rem" }} />
              Inventory
            </span>
            <IconButton
              onClick={() => {
                setUpdateData(!updateData);
              }}
            >
              <SyncIcon fontSize="inherit" />
            </IconButton>
          </div>
          <div className="dashboard__cardInfo">
            <h1>₹​ {numberFormatter(inventoryData.total)}</h1>
          </div>
          <span className="dashboard__cardFooter">
            Last Updated:{" "}
            {inventoryData.updated === "N/A"
              ? "N/A"
              : format(inventoryData.updated)}
          </span>
        </CardContent>
      </Card>

      <Card
        onClick={() => {
          setActive(1);
        }}
        className={`dashboard__card sales ${
          salesData.trend === "+"
            ? "positive"
            : salesData.trend === "-"
            ? "negative"
            : ""
        } ${active === 1 ? "active" : ""}`}
      >
        <CardContent>
          <div className="dashboard__cardHeader">
            <span className="dashboard__cardTitle">
              <MonetizationOnIcon style={{ marginRight: "0.2rem" }} />
              Sales
            </span>
            <IconButton>
              <SyncIcon fontSize="inherit" />
            </IconButton>
          </div>

          <div className="dashboard__cardInfo">
            <h1>₹​ {numberFormatter(salesTotal)} </h1>
            <p className="dashboard__cardInfoPercentage">
              {salesData.trend + salesData.percentage}
            </p>
            {salesData.trend === "+" ? (
              <ArrowUpwardIcon />
            ) : salesData.trend === "-" ? (
              <ArrowDownwardIcon />
            ) : (
              ""
            )}
          </div>
          <span className="dashboard__cardFooter">Compared to last year</span>
        </CardContent>
      </Card>

      <Card
        onClick={() => {
          setActive(2);
        }}
        className={`dashboard__card reports ${active === 2 ? "active" : ""}`}
      >
        <CardContent>
          <div className="dashboard__cardHeader">
            <span className="dashboard__cardTitle">
              <ReportIcon style={{ marginRight: "0.2rem" }} />
              Reports
            </span>
            <IconButton>
              <SyncIcon fontSize="inherit" />
            </IconButton>
          </div>

          <div className="dashboard__cardInfo">
            <h1>{reportsData.total}</h1>
          </div>
          <span className="dashboard__cardFooter">
            {reportsData.resolved} resolved
          </span>
        </CardContent>
      </Card>
    </div>
  );
}

export default DashboardCards;
