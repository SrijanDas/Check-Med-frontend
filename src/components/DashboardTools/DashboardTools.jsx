import React from "react";

function DashboardTools() {
  return (
    <div>
      <div class="dashboardTools">
        <ul class="dashboardToolsList">
          <li id="userProfile" class="sidebarList__item active">
            <span class="sidebarList__itemText">Dashboard</span>
          </li>
          <li id="userProfile" class="sidebarList__item active">
            <span class="sidebarList__itemText">Inventory</span>
          </li>
          <li id="userProfile" class="sidebarList__item active">
            <span class="sidebarList__itemText">Sales</span>
          </li>
          <li id="userProfile" class="sidebarList__item active">
            <span class="sidebarList__itemText">Reports</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardTools;
