import React, { useState } from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";

function Orders() {
  const [data, setData] = useState();

  const title = "Orders";
  return (
    <div className="dashboardContainer">
      <MaterialTable
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
          headerStyle: {
            color: "#1976D2",
          },
          paging: false,
          exportButton: true,
        }}
        title={title}
        columns={[]}
        data={[]}
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
  );
}

export default Orders;
