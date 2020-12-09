import React from "react";
import { UseRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  const routes = UseRoutes();
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
