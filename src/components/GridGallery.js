import React, { useState, useEffect } from "react";
import axios from "axios";
import "./gridgallery.css";
function GridGallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://picsum.photos/v2/list";
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="gallery-container">
      {data.map((item) => (
        <div>
          <img key={item.id} className="image-sty" src={item.download_url} alt="gallery images" />
        </div>
      ))}
    </div>
  );
}
export default GridGallery;
