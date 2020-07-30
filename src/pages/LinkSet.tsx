import React from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "../components/Header";
import styles from "../css/linkSet.module.less";

const LinkSet: React.FC<RouteComponentProps> = () => {
  const obj = {
    leftUrl: "/login",
    centerTxt: "链接设置",
  };

  return (
    <div className={styles.container}>
      <Header {...obj}></Header>
      <div className={styles.main}>
        <div className={styles.title}>链接设置</div>
        <input type="text" className={styles.input} placeholder="链接地址" />
        <div className={styles.btnList}>
          <div className={`${styles.btn} ${styles.testBtn}`}>测速</div>
          <div className={`${styles.btn} ${styles.okBtn}`}>确认</div>
        </div>
      </div>
    </div>
  );
};

export default LinkSet;
