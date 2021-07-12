import React, { useState } from "react";
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
import { salesData, topSellersData } from "../../helpers/dummyData";
import ChartBtnGroup from "../ChartBtnGroup/ChartBtnGroup";
import MaterialTable from "material-table";

function Sales() {
  const chartData = salesData;
  const barChartData = topSellersData;
  const columns = [];
  const [data, setData] = useState([]);

  return (
    <div className="salesDetailContainer">
      <div className="sales__chart">
        <div className="sales__chartHeader">
          <h3 className="chartTitle">Sales Analytics</h3>
          <ChartBtnGroup />
        </div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={chartData}>
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
          title="Inventory"
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
