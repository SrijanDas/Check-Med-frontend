import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import { licenseNumbers } from "../../helpers/dummyData";
import { ToastContainer, toast } from "react-toastify";

import { Link, Redirect } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  loadingFail,
  loadingStart,
  loadingSuccess,
} from "../../store/actions/loadingActions";
import { signup } from "../../store/actions/authActions";

function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.loading.error);

  const [formData, setFormData] = useState({
    licenseNumber: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    dispatch(loadingStart());
    e.preventDefault();

    const { licenseNumber, email, password1, password2 } = formData;

    const validLicense = licenseNumbers.find(
      (element) => element === parseInt(licenseNumber)
    );
    if (!validLicense) {
      dispatch(loadingFail());
      toast.error("The license number is invalid.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (password1.length < 6) {
      dispatch(loadingFail());
      toast.error("Password must be 6 characters long", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (password1 !== password2) {
      dispatch(loadingFail());

      toast.error("The password and confirm password do not match", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (!termsAccepted) {
      dispatch(loadingFail());
      toast.error("Please accept the terms and conditions", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (!error) {
      const signUpData = {
        email,
        password: password1,
        re_password: password2,
      };
      dispatch(signup(signUpData));
      setAccountCreated(true);
    }
    dispatch(loadingSuccess());
  };

  if (accountCreated) {
    return <Redirect to="/signup-success" />;
  }

  return (
    <div>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Account
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="licenseNumber"
              label="License Number"
              type="text"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="email"
              required
              fullWidth
              label="Email Address"
              name="email"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password1"
              label="Password"
              type="password"
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Confirm Password"
              type="password"
              onChange={handleChange}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I accept the terms and conditions"
              onChange={() => {
                setTermsAccepted(!termsAccepted);
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create Account
            </Button>
            <Grid container>
              <Link to="/login">{"Already have an account? Log In"}</Link>
            </Grid>
          </form>
        </Paper>
      </Container>
      <ToastContainer className="ml-3 mb-3" />
    </div>
  );
}

export default SignUp;
