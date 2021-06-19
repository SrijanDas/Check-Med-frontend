import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="loginPage">
      <h1 style={{ fontWeight: 400, textAlign: "center" }} className="my-4">
        Create New Account
      </h1>
      <Card className="loginPage__card">
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
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button className="my-2 btn-block" variant="success">
              Login
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
