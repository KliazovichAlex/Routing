import React, { Component } from "react";
import "../index.css";

class SignIn extends Component {
  state = {
    isSignedIn: false,
  };
  click = () => {
    this.setState({ isSignedIn: true });
  };
  render() {
    return this.state.isSignedIn === false ? (
      <div className="user">
        <button onClick={() => setTimeout(this.click, 1000)}>LogIn</button>
      </div>
    ) : (
      <div className="user">
        <h1>Welcome bro!</h1>
      </div>
    );
  }
}

export default SignIn;
