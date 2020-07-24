import React from "react";
import { RouteComponentProps } from "@reach/router";
import IsLogin from "../components/IsLogin";

const My: React.FC<RouteComponentProps> = IsLogin((props) => {
  return <div>My</div>;
});

//export default My;
My.displayName = "My";
export default My;
