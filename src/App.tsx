import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import Login from "./pages/Login";
import My from "./pages/My";

let Home = (props: RouteComponentProps) => <div>Home</div>;
let Dash = (props: RouteComponentProps) => <div>Dash</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Login path="/login"></Login>
      <My path="/my"></My>
      <Home path="/" />
      <Dash path="/dashboard" />
    </Router>
  );
};

export default App;
