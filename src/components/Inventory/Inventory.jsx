import React, { useState, useEffect } from "react";
import "./Inventory.css";
import MaterialTable, { MTableToolbar } from "material-table";
import { useSelector } from "react-redux";
import axios from "../../helpers/axios";
import { Paper, Button } from "@material-ui/core";
import SyncIcon from "@material-ui/icons/Sync";

function Inventory() {
  const [data, setData] = useState();
  const shop = useSelector((state) => state.shop.shop);
  const [updateData, setUpdateData] = useState(false);

  const sendToDb = async (newData) => {
    try {
      newData.shop_id = shop.id;
      await axios.post("/inventory/add/", newData);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (item) => {
    try {
      await axios.post("/inventory/del/", item);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getInventoryData = async () => {
      try {
        const res = await axios.get(`/inventory/${shop.id}`);
        setData(res.data);
      } catch (error) {}
    };
    getInventoryData();
  }, [shop, updateData]);

  const columns = [
    {
      title: "Medicine Name",
      field: "medicine.name",
      align: "left",
    },
    { title: "Qty", field: "quantity", type: "numeric", align: "left" },
    { title: "Price", field: "price", type: "numeric", align: "left" },
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
          components={{
            Container: (props) => <Paper {...props} elevation={0} />,
            Toolbar: (props) => (
              <div>
                <MTableToolbar {...props} />
                <Button
                  onClick={() => {
                    setUpdateData(!updateData);
                  }}
                  startIcon={<SyncIcon />}
                  className="inventory__syncBtn"
                  variant="outlined"
                >
                  Sync
                </Button>
              </div>
            ),
          }}
          options={{
            actionsColumnIndex: -1,
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
                  const { quantity, price } = newData;
                  newData.total = price * quantity;
                  newData.date = "just now";
                  sendToDb(newData);
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
                  deleteItem(dataDelete[index]);
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
