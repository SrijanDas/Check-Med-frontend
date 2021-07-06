import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "../../helpers/dummyData";
import "./Chart.css";
import ChartBtnGroup from "../ChartBtnGroup/ChartBtnGroup";

function Chart() {
  const data = chartData;
  return (
    <div className="chart">
      <ChartBtnGroup />

      <h3 className="chartTitle">Sales Analytics</h3>
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
  );
}

export default Chart;
