import React from "react";
import { Router, RouteComponentProps } from "@reach/router";

import Index from "./Index";
import My from "./My";
import NotFound from "../common/NotFound";

const RequireLogin: React.FC<RouteComponentProps> = () => {
  //let isLogin = localStorage.
  return (
    <Router>
      <Index path="/"></Index>
      <Index path="index"></Index>
      <My path="my"></My>
      <NotFound default />
    </Router>
  );
};

export default RequireLogin;
