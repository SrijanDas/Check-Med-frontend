import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";

function Feedback() {
  const [optionType, setOptionType] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    setOptionType(event.target.value);
  };

  const optionTypes = [
    {
      value: "Bug",
      label: "Bug",
    },
    {
      value: "Enhancement",
      label: "Enhancement",
    },
    {
      value: "Other",
      label: "Other",
    },
  ];

  return (
    <Container className="contactPage" maxWidth="md">
      <Typography variant="h4">Feedback</Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Give us your feedback to improve this website
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
          label="Type"
          variant="outlined"
          required
          select
          value={optionType}
          onChange={handleChange}
        >
          {optionTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          margin="normal"
          fullWidth
          label="Feedback"
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

export default Feedback;
