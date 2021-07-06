import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { topSellersData } from "../../helpers/dummyData";
import ChartBtnGroup from "../ChartBtnGroup/ChartBtnGroup";
import "./TopSeller.css";

function TopSellerChart() {
  const data = topSellersData;
  return (
    <div className="barChart">
      <ChartBtnGroup />
      <h3 className="chartTitle">Top Sellers</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="unitsSold" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopSellerChart;
