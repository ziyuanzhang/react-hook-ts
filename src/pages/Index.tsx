import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import Header from "../components/Header";
import RequireLogin from "../components/RequireLogin";

const Index: React.FC<RouteComponentProps> = () => {
  const obj = {
    centerTxt: "首页",
    rightIcon: "icon-sousuo",
  };
  return (
    <div>
      <Header {...obj}></Header>
    </div>
  );
};

export default withRouter(RequireLogin(Index));
