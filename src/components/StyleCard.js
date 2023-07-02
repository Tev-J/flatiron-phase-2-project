import React from "react";
import { Card, Button } from "react-bootstrap";

function StyleCard({ styleDesign }) {
  const { id, image, name, description, likes, price } = styleDesign;

  return (
    <div className="col-md-4 mb-4">
      <Card style={{ width: "18rem", height: "100%" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{ objectFit: "cover", height: "70%" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text-muted"> {price} </Card.Text>
          <div className="d-flex justify-content-between">
            <Button variant="primary">Go somewhere</Button>
            <Button variant="primary">👍</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StyleCard;
