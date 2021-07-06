import React, { useState } from "react";
import MaterialTable from "material-table";
import { inventoryColumns, inventoryData } from "../../helpers/dummyData";
import "./Table.css";

function Table(props) {
  const { active } = props;
  const [data, setData] = useState(
    active === 0 ? inventoryData : active === 1 ? inventoryData : null
  );
  const title = active === 0 ? "Inventory" : active === 1 ? "Sales" : "";

  const columns =
    active === 0 ? inventoryColumns : active === 1 ? inventoryColumns : null;

  return (
    <div className="table">
      <MaterialTable
        options={{
          actionsColumnIndex: -1,
        }}
        title={title}
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
  );
}

export default Table;
