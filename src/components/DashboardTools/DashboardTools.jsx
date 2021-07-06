import React, { useState } from "react";
import "./DashboardTools.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReportIcon from "@material-ui/icons/Report";
import NotificationsIcon from "@material-ui/icons/Notifications";

function DashboardTools() {
  const [active, setActive] = useState("Dashboard");

  const optionsList = [
    { icon: <DashboardIcon />, text: "Dashboard" },
    { icon: <LocalMallIcon />, text: "Inventory" },
    { icon: <MonetizationOnIcon />, text: "Sales" },
    { icon: <ReportIcon />, text: "Reports" },
    { icon: <NotificationsIcon />, text: "Notifications" },
  ];
  return (
    <div>
      <div className="dashboardTools">
        <ul className="dashboardToolsList">
          {optionsList.map((option, indx) => (
            <li
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
