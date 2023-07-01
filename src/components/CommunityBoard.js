import React, { useState } from "react";
import StyleCardForm from "./StyleCardForm";
import { useNavigate } from "react-router-dom";

function CommunityBoard() {
  const navigate = useNavigate();
  const handleUploadPhoto = () => {
    navigate("/community/form");
  };

  return (
    <div class="container py-4">
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Share Your Style</h1>
          <p class="col-md-8 fs-4">
            Join our community by posting a picture of your new haircut. Entrees
            will be posted to the Inspiration board, where visitors will be able
            to see your contributions. Showcase your styles! Set new trends!
          </p>
          <button
            class="btn btn-primary btn-lg"
            type="button"
            onClick={handleUploadPhoto}
          >
            Upload Photo
          </button>
        </div>
      </div>

      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Eum dolores minus sed iste modi.</h2>
            <p>
              Lorem ipsum dolor sit amet. Cum quia nisi quo perspiciatis fugiat
              33 galisum tenetur et necessitatibus facilis. Vel asperiores illum
              eum aspernatur dolores aut praesentium error quo internos vero id
              ducimus dolores qui autem delectus. Nam vitae tenetur a
              repellendus eius ut maiores quod et voluptatum doloremque ut minus
              adipisci ea cumque earum.
            </p>
            <button class="btn btn-outline-light" type="button">
              Press for Good Luck
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>Est quasi quos est accusamus veritatis.</h2>
            <p>
              Qui nihil quibusdam et saepe obcaecati sed exercitationem neque ab
              dignissimos quia. Et reiciendis voluptas rem odit galisum ea enim
              aperiam qui velit nisi in laudantium dolor sit unde quia rem ipsum
              molestiae.
            </p>
            <button class="btn btn-outline-secondary" type="button">
              Useless button
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <h1>Upload Cut</h1>
    //   <span className="border-top-0 border border-info">
    //     <div>
    //       <img
    //         src="https://cdn.midjourney.com/0f6ee806-f968-450d-a011-ac7f5184161f/0_2.png"
    //         alt="Community Board Image"
    //       />
    //     </div>
    //   </span>
    // </div>
  );
}

export default CommunityBoard;
