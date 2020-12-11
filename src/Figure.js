import React from "react";
import { useParams } from "react-router-dom";

export const Figure = (props) => {
  let { id } = useParams();
  let { color } = useParams();
  console.log(color);
  console.log(id);

  let boxColor = {
    backgroundColor: `${color}`,
  };
  return (
    <div className={`figure${id}`} style={boxColor}>
      <h1>{id === "1" ? "Square" : "Circle"}</h1>
    </div>
  );
};
