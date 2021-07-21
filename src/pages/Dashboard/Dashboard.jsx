import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import DashboardTools from "../../components/DashboardTools/DashboardTools";
import Inventory from "../../components/Inventory/Inventory";
import Sales from "../../components/Sales/Sales";
import Reports from "../../components/Reports/Reports";
import { Button, Container, Grid } from "@material-ui/core";
import Orders from "../../components/Orders/Orders";
import ReportsPage from "../../components/ReportsPage/ReportsPage";
import Notifications from "../../components/Notifications/Notifications";
import ShopDetails from "../../components/ShopDetails/ShopDetails";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Dashboard() {
  const [active, setActive] = useState();
  const [page, setPage] = useState(0);
  const [shopCreated, setShopCreated] = useState(false);
  const shop = useSelector((state) => state.shop.shop);
  const history = useHistory();

  const routeChange = () => {
    history.push("/createShop");
  };

  useEffect(() => {
    if (shop) {
      setShopCreated(true);
    } else {
      setShopCreated(false);
    }
  }, [shop]);

  return (
    <>
      {shopCreated ? (
        <div className="dashboardContainer">
          <Container className="dashboard" maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <DashboardTools
                  page={page}
                  setPage={setPage}
                  className="dashboard__tools"
                />
              </Grid>
              <Grid className="dashboard__right" item xs={10}>
                {page === 0 ? (
                  <>
                    <div className="dashboard__rightCards">
                      <DashboardCards active={active} setActive={setActive} />
                    </div>
                    <div className="dashboard__rightContent">
                      {active === 0 ? (
                        <Inventory />
                      ) : active === 1 ? (
                        <Sales />
                      ) : active === 2 ? (
                        <Reports />
                      ) : (
                        <ShopDetails />
                      )}
                    </div>{" "}
                  </>
                ) : page === 1 ? (
                  <ShopDetails showBtns />
                ) : page === 2 ? (
                  <Orders />
                ) : page === 3 ? (
                  <Notifications />
                ) : page === 4 ? (
                  <ReportsPage />
                ) : page === 5 ? (
                  <Inventory />
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
      ) : (
        <>
          <div className="dashboard__createShop">
            <Typography variant="h5" align="center" gutterBottom>
              Let's setup your shop
            </Typography>
            <Button variant="contained" color="primary" onClick={routeChange}>
              Create Shop
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
