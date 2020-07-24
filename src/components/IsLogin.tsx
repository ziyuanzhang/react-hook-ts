import React from "react";
import { navigate } from "@reach/router";

const IsLogin = (WrappedComponent: React.FC) => {
  let isLogin = false;
  if (!isLogin) {
    navigate("/login");
  }
  return function () {
    return <WrappedComponent></WrappedComponent>;
  };
};

export default IsLogin;
