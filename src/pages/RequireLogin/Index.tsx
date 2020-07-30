import React from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "../../components/Header";

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

export default Index;
