import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
import React from "react";
import { reportData } from "../../helpers/dummyData";
import ReportTimeline from "../ReportTimeline/ReportTimeline";
function ReportsPage() {
  const reportColumns = [
    {
      title: "ID",
      field: "reportId",
    },
    {
      title: "Action Taken",
      field: "actionTaken",
      render: (rowData) => {
        const action = rowData.actionTaken;
        const rowClass =
          action === "Resolved"
            ? "Resolved"
            : action === "False report"
            ? "FalseReport"
            : "Cbs";
        return <div className={`reportTable_row ${rowClass}`}>{action}</div>;
      },
    },
    {
      title: "Status",
      field: "status",
      render: (rowData) => {
        const action = rowData.status;
        const rowClass =
          action === "Accepted"
            ? "Resolved"
            : action === "Rejected"
            ? "rejected"
            : "pending";
        return <div className={`reportTable_row ${rowClass}`}>{action}</div>;
      },
    },
  ];

  const data = reportData;
  const title = "Reports";

  const columns = reportColumns;
  return (
    <div className="reportTable__container">
      <div className="reportTable">
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
          }}
          title={title}
          columns={columns}
          data={data}
          detailPanel={(rowData) => {
            return <ReportTimeline />;
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
      </div>
    </div>
  );
}

export default ReportsPage;
