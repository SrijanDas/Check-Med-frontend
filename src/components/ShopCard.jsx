import React from "react";
import Card from "react-bootstrap/Card";

function ShopCard({ inStock }) {
  const lowStock = inStock <= 10 ? true : false;
  const bg = lowStock ? "#DC3545" : "#198754";
  const header = lowStock ? "Only Few Left" : "In Stock";
  const statusColor = lowStock ? "#DC3545" : "#198754";

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
            Qty: {inStock}
          </Card.Text>
          <Card.Link href="#">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Location
          </Card.Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          Last Updated: 2 days ago
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ShopCard;
