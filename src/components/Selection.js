import React from "react";
import { useState } from "react";

function Selection({ ele, applyColor }) {
  const [color, setColor] = useState("");
  function clickHandler() {
    applyColor(setColor);
  }
  return (
    <div
      onClick={clickHandler}
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
        backgroundColor: `${color}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "19px",
        fontWeight: "bold",
      }}
    >
      Selection
    </div>
  );
}
export default Selection;
