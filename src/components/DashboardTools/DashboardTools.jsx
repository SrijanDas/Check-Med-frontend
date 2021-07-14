import React from "react";
import "./DashboardTools.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StoreIcon from "@material-ui/icons/Store";
import ReportIcon from "@material-ui/icons/Report";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import BarChartIcon from "@material-ui/icons/BarChart";
import ListAltIcon from "@material-ui/icons/ListAlt";

function DashboardTools({ page, setPage }) {
  const optionsList = [
    { icon: <DashboardIcon />, text: "Dashboard", id: 0 },
    { icon: <StoreIcon />, text: "Shop Details", id: 1 },
    { icon: <ListAltIcon />, text: "Orders", id: 2 },
    { icon: <NotificationsIcon />, text: "Notifications", id: 3 },
    { icon: <ReportIcon />, text: "Reports", id: 4 },
    // { icon: <BarChartIcon />, text: "Predict Sales" },
  ];
  return (
    <div>
      <div className="dashboardTools">
        <ul className="dashboardToolsList">
          {optionsList.map((option, indx) => (
            <li
              key={indx}
              onClick={() => {
                setPage(option.id);
              }}
              className={`dashboardToolsList__item ${
                page === option.id ? "active" : ""
              }`}
            >
              <span className="dashboardToolsList__itemIcon">
                {option.icon}
              </span>
              <span className="dashboardToolsList__itemText">
                {option.text}
              </span>
              <span className="dashboardToolsList__itemTooltiptext">
                {" "}
                {option.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardTools;
