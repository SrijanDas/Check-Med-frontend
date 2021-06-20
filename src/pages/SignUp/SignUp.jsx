import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signupPage">
      <Card className="signup_card">
        <h1 style={{ fontWeight: 400, textAlign: "center" }} className="my-4">
          Create New Account
        </h1>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Shop Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>License Number</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>District</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password Again</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button type="submit" className="my-2 btn-block" variant="primary">
              Create Account
            </Button>
          </Form>
          <p className="mt-4">
            Already have an account?{" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              Login
            </Link>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
