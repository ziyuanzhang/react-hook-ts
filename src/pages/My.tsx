import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./my.module.less";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RequireLogin from "../components/common/RequireLogin";

const My: React.FC<RouteComponentProps> = (props) => {
  const obj = {
    centerTxt: "我的",
  };
  return (
    <div className={styles.container}>
      <Header {...obj}></Header>
      <div className={styles.main}></div>
      <Footer></Footer>
    </div>
  );
};

export default withRouter(RequireLogin(My));
