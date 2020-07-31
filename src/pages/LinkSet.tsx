import React, { useRef } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import Header from "../components/Header";
import styles from "./linkSet.module.less";
import ajax from "../util/ajax";
import Toast from "../components/global/Toast";

const LinkSet: React.FC<RouteComponentProps> = () => {
  const obj = {
    leftUrl: "/login",
    centerTxt: "链接设置",
  };
  let baseUrl = localStorage.baseUrl ? localStorage.baseUrl : "";
  const linkRef = useRef<HTMLInputElement>(null);
  const testNetworkSpeed = async () => {
    if (linkRef.current && linkRef.current.value) {
      await ajax.testGet(linkRef.current.value);
      Toast("链接畅通！");
    }
  };
  const okFun = async () => {
    if (linkRef.current && linkRef.current.value) {
      await ajax.testGet(linkRef.current.value);
      localStorage.baseUrl = linkRef.current.value;
      Toast("保存成功！").then((res) => {
        navigate("/login");
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

export default LinkSet;
