import React, { useState } from "react";
import "./counter.css";
import { textAlign } from "@mui/system";
function Counter() {
  const [count, setCount] = useState(0);
  const addCount = () => {
   // setCount(count + 1);
   setCount((prev) => prev +1)
  };

  const decCount = () => {
    if(count <= 0){
        setCount(0)
    }
    else{
//   setCount(count - 1);
setCount((prev) => prev -1)
    }
  
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
// Did you login? yes. neku open cheste ne loginayyinte ne ga repo create chesav mari login lekunte ela chesav repo 
// adi kaadu brouser lo es browser lo vachindi ga adi login chesava akkada chyyaledu ennu chrome lo chesa
// This must work dontknow why not working
// you can do -> control + shift + P -> format document
// then it will format, format on save not working somehow
