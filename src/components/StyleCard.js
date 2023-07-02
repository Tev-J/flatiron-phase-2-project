import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function StyleCard({ styleDesign }) {
  const { id, image, name, description, likes, price } = styleDesign;
  const [liked, setLiked] = useState(false);

  //sets like button as active and updates likes
  const handleLike = () => {
    setLiked(!liked);

    fetch(`https://my-server-j9z7.onrender.com/db/db.json/styles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: liked ? likes - 1 : likes + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        // think I need to update a state
      });
  };

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
          <Card.Text className="text-muted">{price}</Card.Text>
          <div>
            <Button
              variant={liked ? "primary" : "outline-primary"}
              onClick={handleLike}
            >
              👍 {likes}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StyleCard;
