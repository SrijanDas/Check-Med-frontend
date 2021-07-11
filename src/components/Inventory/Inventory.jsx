import React, { useState, useEffect } from "react";
import "./Inventory.css";
import MaterialTable from "material-table";
import { useSelector } from "react-redux";
import axios from "../../helpers/axios";

function Inventory() {
  const [data, setData] = useState();
  console.log(data);
  const shop = useSelector((state) => state.shop.shop);

  useEffect(() => {
    const getInventoryData = async () => {
      try {
        const res = await axios.get(`/inventory/${shop.id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInventoryData();
  }, [shop]);

  const columns = [
    { title: "Medicine Name", field: "medicine.name" },
    { title: "Qty", field: "quantity", type: "numeric" },
    { title: "Price", field: "medicine.price", type: "numeric" },
    {
      title: "Total",
      field: "total",
      type: "numeric",
    },
    { title: "Last Updated", field: "date" },
  ];
  return (
    <div className="inventory">
      <div className="inventory__table">
        <MaterialTable
          options={{
            actionsColumnIndex: -1,
          }}
          title="Inventory"
          columns={columns}
          data={data}
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
