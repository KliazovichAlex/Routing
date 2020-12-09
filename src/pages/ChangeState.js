import React, { Component } from "react";
import "../index.css";

class ChangeState extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(event) => {
            this.setState({
              value: "" + event.nativeEvent.target.value,
            });
          }}
          value={this.state.value}
        />
      </div>
    );
  }
}
export default ChangeState;
