import React from "react";
import Card from "react-bootstrap/Card";

function UserLocationCard() {
  return (
    <>
      <Card className="mt-4">
        <Card.Body>
          <Card.Text>Your Location</Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="assets/map.jpg" />
      </Card>
    </>
  );
}

export default UserLocationCard;
