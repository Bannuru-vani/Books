import React, { useState } from "react";
import "./carosal.css";
const images = [
  "https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  "https://th.bing.com/th/id/OIG2.9O4YqGf98tiYzjKDvg7L",
  "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  "https://th.bing.com/th/id/OIG3.80EN2JPNx7kp5VqoB5kz",
];
function Carosal() {
  const [displayIndex, setdisplayIndex] = useState(0);
  console.log(displayIndex);
  const gotoNextimage = () => {
    setdisplayIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const gotoPreviousimage = () => {
    setdisplayIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  setTimeout(() => {
    gotoNextimage();
  }, 5000);
  return (
    <div>
      <h1 className="carousal-header">Carousal</h1>
      <div className="image-con">
        <button className="carousal-but" onClick={gotoPreviousimage}>
          Prev
        </button>
        <img className="image-carousal" src={images[displayIndex]} alt="" />

        <button className="carousal-but" onClick={gotoNextimage}>
          Next
        </button>
      </div>
    </div>
  );
}
export default Carosal;
