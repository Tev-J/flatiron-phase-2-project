import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function StyleCard({ styleDesign }) {
  const { id, image, name, description, likes, price } = styleDesign;
  const [liked, setLiked] = useState(false);
  const [updatedLikes, setUpdatedLikes] = useState(likes);

  // sets like button as active and updates likes
  const handleLike = () => {
    setLiked(!liked);
    const newLikes = liked ? updatedLikes - 1 : updatedLikes + 1;

    fetch(`https://my-server-j9z7.onrender.com/db/db.json/styles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: newLikes }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdatedLikes(newLikes);
      });
  };

  const cardStyle = {
    width: "18rem",
    height: "100%",
  };

  const imageStyle = {
    objectFit: "contain",
    maxHeight: "200px",
    maxWidth: "100%",
  };

  return (
    <div className="col-md-4 mb-4 mx-auto" style={cardStyle}>
      <Card className="shadow p-3 mb-5 bg-light rounded justify-content-center">
        <Card.Img variant="top" src={image} alt={name} style={imageStyle} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text className="text-muted">{price}</Card.Text>
          <div>
            <Button
              variant={liked ? "primary" : "outline-primary"}
              onClick={handleLike}
            >
              👍 {updatedLikes}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StyleCard;
