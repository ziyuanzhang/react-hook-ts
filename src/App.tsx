import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

let Home = (props: RouteComponentProps) => <div>Home</div>;
let Dash = (props: RouteComponentProps) => <div>Dash</div>;

const App: React.FC = () => {
  return (
    <Router>
      <Home path="/" />
      <Dash path="dashboard" />
    </Router>
  );
};

export default App;
