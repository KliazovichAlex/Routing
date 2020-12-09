import React, { Component } from "react";
import data from "../data.json";
import "../index.css";

class Data extends Component {
  render() {
    return data.map((element) => {
      return (
        <div className="users">
          <h1>{element.name.first}</h1>
          <h2>{element.name.last}</h2>
        </div>
      );
    });
  }
}

export default Data;
