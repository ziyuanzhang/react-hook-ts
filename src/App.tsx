import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import LinkSet from "./pages/LinkSet";
import RequireLogin from "./pages/RequireLogin/RequireLogin";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <RequireLogin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/linkSet">
          <LinkSet />
        </Route>
        <Redirect from="/:any" to="/"></Redirect>
      </Switch>
    </HashRouter>
  );
};

export default App;
