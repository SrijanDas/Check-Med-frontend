import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function StyledNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="applink" style={{ color: "white" }} to="/">
              CheckMed
            </Link>
          </Navbar.Brand>
          <Button variant="success">Shop Login</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default StyledNavbar;
