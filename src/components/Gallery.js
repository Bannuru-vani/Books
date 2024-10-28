import React, { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
function Gallery() {
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
          <img className="image-sty" src={item.download_url} alt="k" />
        </div>
      ))}
    </div>
  );
}
export default Gallery;
