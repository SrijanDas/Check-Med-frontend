import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { load_user, checkAuthenticated } from "../store/actions/authActions";
import useStyles from "./style";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  const classes = useStyles();

  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div className={classes.root}>
      <ScrollToTop />
      <Navbar navbarBrand="CheckMeds" />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
