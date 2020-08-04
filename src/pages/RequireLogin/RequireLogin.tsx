import React from "react";
import { Router, RouteComponentProps, navigate } from "@reach/router";

import Index from "./Index";
import My from "./My";
import Page404 from "../common/Page404";

const RequireLogin: React.FC<RouteComponentProps> = () => {
  let isLogin = localStorage.loginInfo ? true : false;
  if (!isLogin) {
    navigate("/login");
  }

  return (
    <>
      {isLogin ? (
        <Router>
          <Index path="/"></Index>
          <Index path="index"></Index>
          <My path="my"></My>
          <Page404 default />
        </Router>
      ) : (
        <div>hhaha</div>
      )}
    </>
  );
};

export default RequireLogin;
