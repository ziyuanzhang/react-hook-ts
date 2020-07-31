import React from "react";
import ReactDOM from "react-dom";
import styles from "./toast.module.less";

let setTime: any = null;
let Toast = (msg: string, time: number = 2000) => {
  return new Promise((resolve, reject) => {
    // 页面创建弹窗的Dom容器
    let toastModal = document.querySelector("#toastModal") as HTMLDivElement;
    if (!toastModal) {
      toastModal = document.createElement("div");
      toastModal.id = "toastModal";
      document.body.appendChild(toastModal);
    }

    // 弹窗组件
    const toastVdom = (
      <div className={styles.container}>
        <div className={styles.toast}>{msg}</div>
      </div>
    );

    ReactDOM.render(toastVdom, toastModal);

    if (!setTime) {
      setTime = setTimeout(() => {
        ReactDOM.unmountComponentAtNode(toastModal);
        document.body.removeChild(toastModal);
        clearTimeout(setTime);
        setTime = null;
        resolve("ok");
      }, time);
    }
  });
};
export default Toast;
