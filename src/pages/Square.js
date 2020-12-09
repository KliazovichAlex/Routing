import React, { Component } from "react";
import "../index.css";

class SquareOne extends Component {
  render() {
    return <div className={this.props.cssClass}>{this.props.label}</div>;
  }
}

class Square extends Component {
  render() {
    return (
      <div className="App">
        <SquareOne label="Big square" cssClass="big" />
        <SquareOne label="Midle square" cssClass="mid" />
        <SquareOne label="Small square" cssClass="small" />
      </div>
    );
  }
}

export default Square;
