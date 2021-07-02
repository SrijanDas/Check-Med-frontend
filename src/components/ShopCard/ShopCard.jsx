import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { format } from "timeago.js";
import "./ShopCard.css";

function ShopCard({ cardData }) {
  const { shop, inventory } = cardData;
  const inStock = cardData.inventory.quantity;
  const lowStock = inStock <= 10 ? true : false;
  const header = lowStock ? "Only Few Left" : "In Stock";
  const statusColor = lowStock ? "#DC3545" : "#198754";

  return (
    <>
      <Card
        className={`shopCard ${lowStock ? "lowStock" : ""}`}
        variant="outlined"
      >
        <CardHeader
          className={`shopCard__header ${lowStock ? "lowStock" : ""}`}
          title={header}
          subheader={`Updated: ${format(inventory.date)}`}
        />
        <CardContent>
          <Typography variant="h4">{shop.name}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${shop.address}, ${shop.state}, ${shop.district} - ${shop.pincode}`}
          </Typography>
          <Typography gutterBottom variant="h6">
            Contact: 12345678
          </Typography>
          <span className={`quantity ${lowStock ? "lowstock" : ""}`}>
            Qty: {inStock}
          </span>
          <Typography>{}</Typography>
        </CardContent>
        <CardActions className="cardActions">
          <Button size="small" color="primary">
            View Details
          </Button>
          <Button size="small" startIcon={<LocationOnIcon />} color="primary">
            Location
          </Button>
          <Button size="small" color="primary">
            Report
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default ShopCard;
