import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import Index from "./Index";
import My from "./My";
import Page404 from "../common/Page404";

const RequireLogin: React.FC<RouteComponentProps> = () => {
  //let isLogin = localStorage.
  return (
    <Router>
      <Index path="/"></Index>
      <Index path="index"></Index>
      <My path="my"></My>
      <Page404 default />
    </Router>
  );
};

export default RequireLogin;
