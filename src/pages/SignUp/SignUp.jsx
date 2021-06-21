import React from "react";
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

import { Link } from "react-router-dom";
import useStyles from "./styles";

function SignUp() {
  const classes = useStyles();

  return (
    <div>
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create New Account
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Shop Name"
              autoFocus
              type="text"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="License Number"
              type="text"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Password Again"
              type="password"
              id="password2"
              autoComplete="current-password"
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Address"
              type="text"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="State"
              type="text"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="District"
              type="text"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Pincode"
              type="text"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="I accept the terms and conditions"
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
    </div>
  );
}

export default SignUp;
