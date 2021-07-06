import React, { useState } from "react";
import "./Dashboard.css";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardTools from "../../components/DashboardTools/DashboardTools";
import Table from "../../components/Table/Table";
import Chart from "../../components/Chart/Chart";
import ReportsTable from "../../components/ReportsTable/ReportsTable";
import TopSellerChart from "../../components/TopSellerChart/TopSellerChart";

function Dashboard() {
  const [active, setActive] = useState();

  return (
    <div className="dashboard">
      <DashboardTools className="dashboard__tools" />
      <div className="dashboard__right">
        <div className="dashboard__rightCards">
          <DashboardCards active={active} setActive={setActive} />
        </div>
        <div className="dashboard__rightContent">
          {active === 0 ? (
            <Table active={active} />
          ) : active === 1 ? (
            <>
              <Chart />
              <TopSellerChart />
              <Table active={active} />
            </>
          ) : active === 2 ? (
            <ReportsTable />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
