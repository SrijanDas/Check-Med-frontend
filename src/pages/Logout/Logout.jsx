import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authActions";
import { Button, Container } from "@material-ui/core";
import { AlertTitle, Alert } from "@material-ui/lab";
import { useHistory } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);
  const history = useHistory();
  return (
    <div>
      <Container style={{ marginTop: "5rem" }} maxWidth="sm">
        <Alert severity="info">
          <AlertTitle>Looged Out</AlertTitle>

          <h1>You have logged out</h1>
          <Button
            style={{ textTransform: "capitalize" }}
            onClick={() => {
              history.push("/login");
            }}
            variant="outlined"
            color="primary"
          >
            Login Again
          </Button>
        </Alert>
      </Container>
    </div>
  );
}

export default Logout;
