import React, { useState, useEffect } from "react";
import "./Inventory.css";
import MaterialTable from "material-table";
import { useSelector } from "react-redux";
import axios from "../../helpers/axios";

function Inventory() {
  const [data, setData] = useState();
  const shop = useSelector((state) => state.shop.shop);

  useEffect(() => {
    const getInventoryData = async () => {
      try {
        const res = await axios.get(`/inventory/${shop.id}`);
        setData(res.data);
      } catch (error) {}
    };
    getInventoryData();
  }, [shop]);

  const columns = [
    {
      title: "Medicine Name",
      field: "medicine.name",
      align: "left",
    },
    { title: "Qty", field: "quantity", type: "numeric", align: "left" },
    { title: "Price", field: "medicine.price", type: "numeric", align: "left" },
    {
      title: "Total",
      field: "total",
      type: "numeric",
      editable: "never",
      align: "left",
    },
    { title: "Last Updated", field: "date", editable: "never" },
  ];
  return (
    <div className="inventory__tableContainer">
      <div className="inventory__table">
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

export default Inventory;
