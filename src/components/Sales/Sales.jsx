import React, { useState } from "react";
import "./Sales.css";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData, topSellersData } from "../../helpers/dummyData";
import ChartBtnGroup from "../ChartBtnGroup/ChartBtnGroup";
import MaterialTable from "material-table";
import numberFormatter from "../../helpers/numberFormatter";

function Sales() {
  const chartData = salesData;
  const barChartData = topSellersData;
  const columns = [
    {
      title: "Order Id",
      // field: "medicine.name",
      align: "left",
    },
    {
      title: "Total",
      align: "left",
    },
    {
      title: "DateTime",
      align: "left",
    },
  ];
  const [data, setData] = useState([]);

  return (
    <div className="salesDetailContainer">
      <div className="sales__chart">
        <div className="sales__chartHeader">
          <h3 className="chartTitle">Sales Analytics</h3>
          <ChartBtnGroup />
        </div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2B81D6" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#2B81D6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey="sales"
              stroke="#2B81D6"
              fill="url(#color)"
              // dot={{ stroke: "#44c0ff", strokeWidth: 4, r: 2, fill: "blue" }}
            />
            <XAxis dataKey="name" />
            <YAxis
              dataKey="sales"
              tickLine={false}
              tickFormatter={(number) => `${numberFormatter(number)}`}
            />
            <Tooltip />
            <CartesianGrid opacity={0.3} vertical={false} />
          </AreaChart>
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
            <Tooltip cursor={false} />
            <Bar dataKey="unitsSold" fill="#2B81D6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="sales__table">
        <MaterialTable
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
            selection: true,
            headerStyle: {
              color: "#1976D2",
            },
          }}
          title="Recent Orders"
          columns={columns}
          data={data}
          actions={[
            {
              tooltip: "Remove All Selected Users",
              icon: "delete",
              onClick: (evt, data) =>
                alert("You want to delete " + data.length + " rows"),
            },
          ]}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
        />
      </div>
    </div>
  );
}

export default Sales;
