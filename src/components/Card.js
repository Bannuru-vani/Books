import React from "react";
import "./card.css";
import imageback from "../assests/backgroundimage.jpg";
function Card() {
  return (
    <div className="caard">
      <div className="containercsrdd">
        <img className="imageStylecarddd" src={imageback} alt="Image" />
        <p>Title</p>
        <p>Description</p>
        <button>Details Card</button>
      </div>
    </div>
  );
}
export default Card;
