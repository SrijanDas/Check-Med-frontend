import React from "react";

function ShopCreate() {
  return (
    <div>
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
    </div>
  );
}

export default ShopCreate;
