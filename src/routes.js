import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Square from "./pages/Square";
import Text from "./pages/Text";
import Data from "./pages/Data";
import SignIn from "./pages/SignIn";
import ChangeState from "./pages/ChangeState";

export const UseRoutes = () => {
  return (
    <Switch>
      <Route path="/square" exact>
        <Square />
      </Route>
      <Route path="/text" exact>
        <Text />
      </Route>
      <Route path="/data" exact>
        <Data />
      </Route>
      <Route path="/signin" exact>
        <SignIn />
      </Route>
      <Route path="/changestate" exact>
        <ChangeState />
      </Route>
      <Redirect to="/square" />
    </Switch>
  );
};
