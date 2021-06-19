import React from "react";
import "./Login.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginPage">
      <h1 style={{ fontWeight: 400, textAlign: "center" }} className="my-4">
        Login
      </h1>
      <Card className="loginPage__card">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>License Number</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button type="submit" className="my-2 btn-block" variant="primary">
              Log In
            </Button>
          </Form>
          <Link style={{ textDecoration: "none" }} to="/sign-up">
            <Button className="my-2 btn-block" variant="success">
              Create New Account
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
