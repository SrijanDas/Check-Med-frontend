import React from "react";
import { Container } from "@material-ui/core";
import { AlertTitle, Alert } from "@material-ui/lab";

function SignupSuccess() {
  return (
    <div>
      <Container style={{ marginTop: "5rem" }} maxWidth="sm">
        <Alert severity="info">
          <AlertTitle>Account Created Successfully.</AlertTitle>
          Open your email to activate your account and login —{" "}
          <strong>You can close this tab.</strong>
        </Alert>
      </Container>
    </div>
  );
}

export default SignupSuccess;
