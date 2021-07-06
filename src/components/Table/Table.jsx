import React from "react";
import MaterialTable from "material-table";
import {
  inventoryColumns,
  inventoryData,
  reportColumns,
  reportData,
} from "../../helpers/dummyData";
import "./Table.css";

function Table(props) {
  const { active } = props;
  const title =
    active === 0
      ? "Inventory"
      : active === 1
      ? "Sales"
      : active === 2
      ? "Reports"
      : "";

  const columns =
    active === 0
      ? inventoryColumns
      : active === 1
      ? inventoryColumns
      : active === 2
      ? reportColumns
      : null;
  const data =
    active === 0
      ? inventoryData
      : active === 1
      ? inventoryData
      : active === 2
      ? reportData
      : null;

  return (
    <div className="table">
      <MaterialTable title={title} columns={columns} data={data} />
    </div>
  );
}

export default Table;
