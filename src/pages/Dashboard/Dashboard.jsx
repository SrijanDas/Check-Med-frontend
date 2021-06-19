import React from "react";
import "./Dashboard.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard my-4">
      <div className="mb-5">
        <h3 className="dashboard__title">Shop Name</h3>
        <p>Contact No: 1234567</p>
        <p>Address: NG Road, State, District, PIN-123</p>
      </div>
      <div>
        <div className="dashboard__cardsContainer">
          {["Inventory", "Sales", "Reports"].map((item, indx) => (
            <Link className="applink">
              <Card
                key={indx}
                bg={indx === 0 ? "primary" : indx === 1 ? "success" : "danger"}
                text="light"
                className="dashboard__card shadow p-3 mb-5 rounded text-center"
              >
                <Card.Body>
                  <h4 className="dashboard__cardsName">
                    {indx === 0 ? (
                      <i class="fas fa-box-open"></i>
                    ) : indx === 1 ? (
                      <i class="fas fa-clipboard-list"></i>
                    ) : (
                      <i class="fas fa-exclamation-circle"></i>
                    )}{" "}
                    {item}
                  </h4>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
