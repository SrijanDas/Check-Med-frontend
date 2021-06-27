import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./Activation.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Activation() {
  return (
    <>
      <CssBaseline />
      <div className="activationPage">
        <Alert severity="success">This is a success message!</Alert>

        <Button
          className="activationPage__loginBtn"
          variant="contained"
          color="primary"
          component={Link}
          to={"/login"}
          disableElevation
        >
          Login
        </Button>
      </div>
    </>
  );
}

export default Activation;
