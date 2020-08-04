import React, { useRef } from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import Header from "../components/Header";
import styles from "./linkSet.module.less";
import ajax from "../util/ajax";

const LinkSet: React.FC<RouteComponentProps> = (props) => {
  console.log("LinkSet:", props);
  const obj = {
    leftUrl: "/login",
    centerTxt: "链接设置",
  };
  let baseUrl = localStorage.baseUrl ? localStorage.baseUrl : "";
  const linkRef = useRef<HTMLInputElement>(null);
  const testNetworkSpeed = async () => {
    if (linkRef.current && linkRef.current.value) {
      await ajax.testGet(linkRef.current.value);
      window.$toast("链接畅通！");
    }
  };
  const okFun = async () => {
    if (linkRef.current && linkRef.current.value) {
      await ajax.testGet(linkRef.current.value);
      localStorage.baseUrl = linkRef.current.value;
      window.$toast("保存成功！", 1000).then((res: string) => {
        props.history.push("/login");
      });
    }
  };

  return (
    <div className={styles.container}>
      <Header {...obj}></Header>
      <div className={styles.main}>
        <div className={styles.title}>链接设置</div>
        <input
          defaultValue={baseUrl}
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

export default withRouter(LinkSet);
