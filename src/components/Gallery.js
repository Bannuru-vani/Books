import React, { useState, useEffect } from "react";
import axios from "axios";
import "./gallery.css";
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
        <div key={item.id}>
          <img  className="image-sty" src={item.download_url} alt={item.author} />
        </div>
      ))}
    </div>
  );
}
export default Gallery;
