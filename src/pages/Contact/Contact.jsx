import { Container, TextField, Typography, Button } from "@material-ui/core";
import React from "react";
import "./Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="contactPage" maxWidth="md">
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="h6" gutterBottom>
        Email: checkmeds2021@gmail.com
      </Typography>

      <form className="contactPage__form" onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          fullWidth
          label="Your Email"
          variant="outlined"
          required
        />
        <TextField
          margin="normal"
          fullWidth
          label="Message"
          variant="outlined"
          multiline={true}
          required
        />

        <Button
          style={{ marginTop: "1rem" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
