import React, { useState } from "react";
import "./Login.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import useStyles from "./loginStyles";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../../store/actions/authActions";

function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email: email, password: password }));
  };

  return (
    <div className="loginPage">
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              type="email"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Typography
              align="center"
              className="loginPage__forgotPasswordLink"
            >
              <Link to="/">Forgot Password?</Link>
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/sign-up">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
