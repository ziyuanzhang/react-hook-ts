import React, { useRef } from "react";
import { RouteComponentProps } from "@reach/router";
import Header from "../components/Header";
import styles from "../css/linkSet.module.less";
import axja from "../util/ajax";

const LinkSet: React.FC<RouteComponentProps> = () => {
  const obj = {
    leftUrl: "/login",
    centerTxt: "链接设置",
  };
  const linkRef = useRef<HTMLInputElement>(null);
  const testNetworkSpeed = () => {
    axja.get(
      "https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1"
    );
  };

  const okFun = () => {};

  return (
    <div className={styles.container}>
      <Header {...obj}></Header>
      <div className={styles.main}>
        <div className={styles.title}>链接设置</div>
        <input
          type="text"
          className={styles.input}
          placeholder="链接地址"
          ref={linkRef}
        />
        <div className={styles.btnList}>
          <div
            className={`${styles.btn} ${styles.testBtn}`}
            onClick={testNetworkSpeed}>
            测速
          </div>
          <div className={`${styles.btn} ${styles.okBtn}`} onClick={okFun}>
            确认
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkSet;
