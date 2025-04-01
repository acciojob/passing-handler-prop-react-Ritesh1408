import React from "react";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background } = config;
  console.log(background);
  return (
    <button
      style={{ backgroundColor: background }}
      onClick={() => selectNextBackground({ background })}
    >
      {config.label}
    </button>
  );
};
export default ColourSelector;