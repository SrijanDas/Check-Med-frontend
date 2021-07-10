import React, { useState } from "react";
import "./Inventory.css";
import MaterialTable from "material-table";
import { inventoryData, inventoryColumns } from "../../helpers/dummyData";

function Inventory() {
  const [data, setData] = useState(inventoryData);
  const columns = inventoryColumns;
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
