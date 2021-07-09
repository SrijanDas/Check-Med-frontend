import React, { useState } from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Link, useParams } from "react-router-dom";
import "./Activation.css";
import { Container, Button, CssBaseline } from "@material-ui/core";
import { verify } from "../../store/actions/authActions";
import {
  loadingStart,
  loadingSuccess,
} from "../../store/actions/loadingActions";
import { useDispatch } from "react-redux";

function AlertSuccess() {
  return (
    <Alert severity="success">
      <AlertTitle>Account Verified</AlertTitle>
      Your account was verified successfully.{" "}
      <strong>
        <Link className="applink" to="/login">
          — Click here to Log In
        </Link>
      </strong>
    </Alert>
  );
}

// function AlertError() {
//   return (
//     <Alert severity="error">
//       <AlertTitle>Verification Faild</AlertTitle>
//       Please try again or —{" "}
//       <strong>
//         {" "}
//         <Link className="applink" to="/contact">
//           Contact Us
//         </Link>
//       </strong>
//     </Alert>
//   );
// }

function Activation() {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();
  const dispatch = useDispatch();

  const handleVerify = async () => {
    dispatch(loadingStart());
    console.log(uid, token);
    dispatch(verify(uid, token));
    setVerified(true);
    dispatch(loadingSuccess());
  };

  return (
    <>
      <CssBaseline />
      <div className="activationPage">
        <Container maxWidth="md">
          {verified ? (
            <AlertSuccess />
          ) : (
            <Button onClick={handleVerify} variant="contained" color="primary">
              Verify
            </Button>
          )}
        </Container>
      </div>
    </>
  );
}

export default Activation;
