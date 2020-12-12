import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Figure } from "./Figure";
export const Nav = () => {
  const [figure, setFigure] = useState(1);
  const [color, setColor] = useState("red");
  const fig1 = () => {
    setFigure(1);
  };
  const fig2 = () => {
    setFigure(2);
  };
  const colorRed = () => {
    console.log(color);
    setColor("red");
    console.log(color);
  };
  const colorBlue = () => {
    console.log(color);
    setColor("blue");
    console.log(color);
  };
  const colorGreen = () => {
    console.log(color);
    setColor("green");
    console.log(color);
  };

  return (
    <Router>
      <div>
        <div>
          <ul>
            <li>
              <Link to={`/figure/${figure}/${color}`} onClick={fig1}>
                Square
              </Link>
            </li>
            <li>
              <Link to={`/figure/${figure}/${color}`} onClick={fig2}>
                Circle
              </Link>
            </li>
            <li>
              <Link to={`/figure/${figure}/${color}`} onClick={colorRed}>
                Red
              </Link>
            </li>
            <li>
              <Link to={`/figure/${figure}/${color}`} onClick={colorGreen}>
                Green
              </Link>
            </li>
            <li>
              <Link to={`/figure/${figure}/${color}`} onClick={colorBlue}>
                Blue
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route path={`/figure/:id/:color`}>
          <Figure />
        </Route>
      </Switch>
    </Router>
  );
};
