import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

function StyleCard({ styleDesign }) {
  const { id, image, name, description, likes, price, origin } = styleDesign;
  const [liked, setLiked] = useState(false);
  const [updatedLikes, setUpdatedLikes] = useState(likes);

  //check origin to apply correct endpoint
  const useableImg =
    origin === "Default"
      ? `${process.env.REACT_APP_API_URL}${image}`
      : `${image}`;

  // sets like button as active and updates likes
  const handleLike = () => {
    setLiked(!liked);
    const newLikes = liked ? updatedLikes - 1 : updatedLikes + 1;

    fetch(`${process.env.REACT_APP_API_URL}/styles/${id}`, {
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
    objectFit: "cover",
    maxHeight: "200px",
    maxWidth: "100%",
    borderRadius: "0.5px",
  };

  return (
    <div className="col-md-4 mb-4 mx-auto rounded-lg " style={cardStyle}>
      <Card className="shadow-lg p-3 mb-5 text-white justify-content-center bg-dark">
        <Card.Title
          style={{ fontSize: "20px" }}
          className="font-weight-bold text-center text-uppercase"
        >
          {name}
        </Card.Title>
        <br></br>
        <Card.Img
          className="rounded-top"
          variant="top"
          src={useableImg}
          alt={name}
          style={imageStyle}
        />
        <Card.Body className="text-center">
          {/* <Card.Title style={{ fontSize: "20px" }} className="font-weight-bold">
            {name}
          </Card.Title> */}
          <Card.Text className="text-white-50">{description}</Card.Text>
          <Card.Text className="text-white-50">{price}</Card.Text>
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
