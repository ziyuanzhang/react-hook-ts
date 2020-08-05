import React from "react";
import { RouteComponentProps } from "react-router-dom";

const RequireLogin = (WrappedComponent: React.FC<RouteComponentProps>) => {
  const wrapped: React.FC<RouteComponentProps> = (props) => {
    let isLogin = localStorage.loginInfo ? true : false;
    if (!isLogin) {
      props.history.push("/login");
    }
    return <WrappedComponent {...props}></WrappedComponent>;
  };
  return wrapped;
};
export default RequireLogin;
