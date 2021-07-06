import React, { useState } from "react";
import "./DashboardTools.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StoreIcon from "@material-ui/icons/Store";
import ReportIcon from "@material-ui/icons/Report";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BarChartIcon from "@material-ui/icons/BarChart";
function DashboardTools() {
  const [active, setActive] = useState("Dashboard");

  const optionsList = [
    { icon: <DashboardIcon />, text: "Dashboard" },
    { icon: <StoreIcon />, text: "Shop Details" },
    { icon: <NotificationsIcon />, text: "Notifications" },
    { icon: <ReportIcon />, text: "Reports" },
    { icon: <BarChartIcon />, text: "Predict Sales" },
  ];
  return (
    <div>
      <div className="dashboardTools">
        <ul className="dashboardToolsList">
          {optionsList.map((option, indx) => (
            <li
              key={indx}
              onClick={() => {
                setActive(option.text);
              }}
              className={`dashboardToolsList__item ${
                active === option.text ? "active" : ""
              }`}
            >
              <span className="dashboardToolsList__itemIcon">
                {option.icon}
              </span>
              <span className="dashboardToolsList__itemText">
                {option.text}
              </span>
              <span class="dashboardToolsList__itemTooltiptext">
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
