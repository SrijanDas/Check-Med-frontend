import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Contact</li>
        <li>Feedback</li>
      </ul>
    </div>
  );
}

export default Footer;
