import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { load_user, checkAuthenticated } from "../store/actions/authActions";
import useStyles from "./style";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

function Layout({ children }) {
  const classes = useStyles();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthenticated());
    dispatch(load_user());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <ScrollToTop />
      <Navbar isAuthenticated={isAuthenticated} navbarBrand="CheckMeds" />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
