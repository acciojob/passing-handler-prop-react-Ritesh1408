import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState(""); 

  return (
    <div
      className="fix-box"
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: background,
        border: "1px solid black",
        cursor: "pointer",
      }}
      onClick={() => applyColor(setBackground)} 
    ></div>
  );
};

export default Selection;
