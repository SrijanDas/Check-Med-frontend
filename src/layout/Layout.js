import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { connect } from "react-redux";
import { load_user, checkAuthenticated } from "../store/actions/authActions";
import useStyles from "./style";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer/Footer";

function Layout({ checkAuthenticated, load_user, children }) {
  const classes = useStyles();

  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [load_user, checkAuthenticated]);

  return (
    <div className={classes.root}>
      <ScrollToTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default connect(null, { checkAuthenticated, load_user })(Layout);
