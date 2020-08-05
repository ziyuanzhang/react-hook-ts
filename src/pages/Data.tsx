import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./data.module.less";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RequireLogin from "../components/common/RequireLogin";

const Data: React.FC<RouteComponentProps> = () => {
  const obj = {
    centerTxt: "数据",
  };
  return (
    <div className={styles.container}>
      <Header {...obj}></Header>
      <div className={styles.main}></div>
      <Footer></Footer>
    </div>
  );
};

export default withRouter(RequireLogin(Data));
