import React from "react";
import "./Sales.css";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData, topSellersData } from "../../helpers/dummyData";
import ChartBtnGroup from "../ChartBtnGroup/ChartBtnGroup";

function Sales() {
  const data = chartData;
  const barChartData = topSellersData;

  return (
    <div className="sales">
      <div className="sales__chart">
        <div className="sales__chartHeader">
          <h3 className="chartTitle">Sales Analytics</h3>
          <ChartBtnGroup />
        </div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="sales" stroke="#5550bd" />
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="sales__barChart">
        <div className="sales__barChartHeader">
          <h3 className="sales__barChartTitle">Top Sellers</h3>
          <ChartBtnGroup />
        </div>
        <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
          <BarChart width={500} height={300} data={barChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="unitsSold" fill="#5550bd" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Sales;
