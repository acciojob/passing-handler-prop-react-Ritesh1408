import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label } = config; 

  return (
    <button
      className="color-button"
      onClick={() => selectNextBackground(background)} 
      style={{
        backgroundColor: background,
        color: "white",
        margin: "5px",
        padding: "10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {label} 
    </button>
  );
};

export default ColourSelector;
