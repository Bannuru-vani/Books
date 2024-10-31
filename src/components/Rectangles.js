import React from "react";
import "./rectangle.css"
function Rectangles() {
  return (
    <div>
      <div style={{ border: "1px solid black" }}>hi</div>
      <div style={{ border: "1px dashed red" }}>hello</div>
      <div style={{ border: "1px dotted blue" }}>namaskar</div>
      <div style={{ border: "1px green double" }}>salamalekum</div>
      <div style={{ border: "1px pink inset", marginTop: "20px" }}>
        salamalekum
      </div>
      <div style={{ border: "1px pink outset", marginTop: "20px" }}>
        salamalekum
      </div>
      <h1>box shadow</h1>
      <div className="horizantaltoverticalboxshadow">
        Box shadow
      </div>
      <div className="horizantaltoverticalboxshadowblur">
        Box shadow
      </div>
      <div className="horizantaltoverticalboxshadowspread">
        box shadow
      </div>
      <div className="horizantaltoverticalboxshadowoutset">
box shadow
      </div>
      <div className="horizantaltoverticalboxshadowmultiple">
box shadow
      </div>
    </div>
  );
}
export default Rectangles;
