import React from "react";

export const Figure = (props) => {
  console.log(props);
  let boxColor = {
    backgroundColor: `${props.style}`,
  };
  return (
    <div className={`figure${props.name}`} style={boxColor}>
      <h1>{props.name === 1 ? "Square" : "Circle"}</h1>
    </div>
  );
};
