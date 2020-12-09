import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
    margin: "0 20px 0 20px",
    border: "2px solid black",
  };
  return (
    <div style={{ marginBottom: " 20px" }}>
      <Link style={linkStyle} to="/square">
        Square
      </Link>
      <Link style={linkStyle} to="/data">
        Data
      </Link>
      <Link style={linkStyle} to="/text">
        Text
      </Link>
      <Link style={linkStyle} to="signin">
        Sign In
      </Link>
      <Link style={linkStyle} to="/changestate">
        Change State
      </Link>
    </div>
  );
};
