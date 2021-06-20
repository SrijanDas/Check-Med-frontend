import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "../Sidebar/Sidebar";

function Navbar(props) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div className="navbar">
      <div className="navbar__brand">
        <MenuIcon onClick={toggleDrawer(true)} className="navbar__menuIcon" />
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <Sidebar toggleDrawer={toggleDrawer} />
          <div style={{ margin: "20px auto" }}>&copy; 2021</div>
        </Drawer>

        <Link
          to="/"
          className="applink"
          style={{ color: "white", fontWeight: "bold", cursor: "pointer" }}
        >
          {props.navbarBrand}
        </Link>
      </div>

      <div className="navbar__rightBtns">
        <Button
          component={Link}
          to="/login"
          variant="contained"
          className="loginBtn"
        >
          Shop Login
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
