import React from "react";
import MaterialTable from "material-table";
import { reportColumns, reportData } from "../../helpers/dummyData";

function Reports() {
  const title = "Reports";
  const data = reportData;
  const columns = reportColumns;
  return (
    <div className="reportTable__container">
      <MaterialTable title={title} columns={columns} data={data} />
    </div>
  );
}

export default Reports;
