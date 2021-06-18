import React from "react";
import Navbar from "react-bootstrap/Navbar";

function StyledNavbar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default StyledNavbar;
