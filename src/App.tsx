import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import LinkSet from "./pages/LinkSet";
import Index from "./pages/Index";
import Data from "./pages/Data";
import My from "./pages/My";
import Page404 from "./pages/Page404";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Redirect from="/index" to="/"></Redirect>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/linkSet">
          <LinkSet />
        </Route>
        <Route path="/data">
          <Data />
        </Route>
        <Route path="/my">
          <My />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
