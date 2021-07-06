import React, { useState } from "react";
import "./Dashboard.css";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardTools from "../../components/DashboardTools/DashboardTools";
import Table from "../../components/Table/Table";
import Chart from "../../components/Chart/Chart";

function Dashboard() {
  const [active, setActive] = useState();

  return (
    <div className="dashboard">
      <DashboardTools className="dashboard__tools" />
      <div className="dashboard__content">
        <DashboardCards active={active} setActive={setActive} />
        <div className="dashboard__contentItem">
          {active === 0 ? (
            <Table active={active} />
          ) : active === 1 ? (
            <>
              <Chart />
              <Table active={active} />
            </>
          ) : active === 2 ? (
            <Table active={active} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
