import React from "react";
import Header from "../../components/Header";

const Index: React.FC = () => {
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
