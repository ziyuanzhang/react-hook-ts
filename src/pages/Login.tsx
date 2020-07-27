import React from "react";
import { RouteComponentProps } from "@reach/router";

const Login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  console.log("Login:", props);
  return <div>Login</div>;
};

export default Login;
