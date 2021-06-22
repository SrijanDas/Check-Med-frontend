import React from "react";
import Card from "react-bootstrap/Card";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { format } from "timeago.js";

function ShopCard({ cardData }) {
  const shop = cardData.shop;
  const inventory = cardData.inventory;
  const inStock = cardData.inventory.quantity;
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
          <Card.Title>{shop.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {`${shop.address}, ${shop.state}, ${shop.district} - ${shop.pincode}`}
          </Card.Subtitle>
          <Card.Text style={{ color: statusColor, fontWeight: 500 }}>
            Qty: {inStock}
          </Card.Text>
          <Card.Link href="#">
            <LocationOnIcon />
            Location
          </Card.Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          {`Last Updated: ${format(inventory.date)}`}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ShopCard;
