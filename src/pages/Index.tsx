import React from "react";
import Header from "../components/Header";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";
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

export default withRouter(Index);
