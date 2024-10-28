import React, { useState } from "react";
import "./login.css";
import { textAlign } from "@mui/system";
function Counter() {
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    console.log("jj");
    setCount(0);
  };
  return (
    <div className="Counter-App">
      <h1 style={{ textAlign: "center" }}>Counter App</h1>
      <h3 style={{ textAlign: "center", color: "red" }}>{count}</h3>
      <div className="buttons">
        <button onClick={addCount} className="button-style increment">
          Increment
        </button>
        <button onClick={resetCount} className="button-style reset">
          Reset
        </button>
        <button onClick={decCount} className="button-style decrement">
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Counter;
//hu do now once here

// This must work dontknow why not working
// you can do -> control + shift + P -> format document
// then it will format, format on save not working somehow
