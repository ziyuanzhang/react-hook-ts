import React from "react";
import { RouteComponentProps } from "react-router-dom";

const RequireLogin = (WrappedComponent) => {
  const aa: React.FC<RouteComponentProps> = (props) => {
    let isLogin = localStorage.loginInfo ? true : false;
    if (!isLogin) {
      props.history.push("/login");
    }
    return <WrappedComponent {...props}></WrappedComponent>;
  };
  return aa;
};
RequireLogin.displayName = "RequireLogin";
export default RequireLogin;
