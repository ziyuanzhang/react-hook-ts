import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

const My: React.FC<RouteComponentProps> = (props) => {
  return <div>My</div>;
};

export default withRouter(My);
