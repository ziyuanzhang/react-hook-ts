import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import Login from "./pages/Login";
import My from "./pages/My";
import Index from "./pages/Index";

let Dash = (props: RouteComponentProps) => <div>Dash</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Index path="/"></Index>
      <Login path="/login"></Login>
      <My path="/my"></My>
      <Dash path="/dashboard" />
    </Router>
  );
};

export default App;
