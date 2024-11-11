import React from "react";
import "./imagestyle.css";
import { useNavigate } from "react-router-dom";

function ImageComponent() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <button className="logout-but" onClick={logout}>
        Logout
      </button>
      <div className="image-container">
        <h1 className="image-style">Imagee Text</h1>
        <p className="image-style">
          Hoisting is the default behaviour of javascript where is var variables
          and function declaration are moved on the top of the scope
        </p>
      </div>
    </>
  );
}
export default ImageComponent;
