import React from "react";
import Card from "react-bootstrap/Card";

function ShopCard({ inStock }) {
  const bg = inStock <= 10 ? "#DC3545" : "#198754";
  const header = inStock <= 10 ? "Only Few Left" : "In Stock";
  const statusColor = inStock <= 10 ? "#DC3545" : "#198754";

  return (
    <div>
      <Card className="mt-4">
        <Card.Header style={{ backgroundColor: bg, color: "white" }}>
          {header}
        </Card.Header>
        <Card.Body>
          <Card.Title>Ray Clinic</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            MB Road, Howrah-711104
          </Card.Subtitle>
          <Card.Text style={{ color: statusColor, fontWeight: 500 }}>
            Status: Available ({inStock})
          </Card.Text>
          <Card.Link href="#">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Location
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ShopCard;
