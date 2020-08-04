import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import Index from "./Index";
import My from "./My";
import Page404 from "../common/Page404";

const RequireLogin: React.FC<RouteComponentProps> = (props) => {
  let isLogin: boolean = localStorage.loginInfo ? true : false;
  if (!isLogin) {
    props.history.push("/login");
  }

  return (
    <Switch>
      <Route path="/">
        <Index />
      </Route>
      <Redirect from="/index" to="/login" />
      <Route path="/my">
        <My></My>
      </Route>
      <Route>
        <Page404></Page404>
      </Route>
    </Switch>
  );
};
export default withRouter(RequireLogin);
