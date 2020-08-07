import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./index.module.less";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import MainNavCom from "../components/MainNavCom";
import RequireLogin from "../components/common/RequireLogin";

const Index: React.FC<RouteComponentProps> = (props) => {
  const obj = {
    centerTxt: "首页",
  };
  const list = [
    {
      icon: "icon-shoukuan3",
      txt: "收款",
      url: "",
      name: "cashRegister",
    },
    {
      icon: "icon-kaidan",
      txt: "开单",
      url: "",
      name: "chooseDishes",
    },
    {
      icon: "icon-tuihuo",
      txt: "退货",
      url: "",
      name: "returnDishes",
    },
    {
      icon: "icon-chadan",
      txt: "查单",
      url: "",
      name: "checkOrder",
    },
    {
      icon: "icon-jiaoban",
      txt: "交班",
      url: "",
      name: "handover",
    },
    {
      icon: "icon-shezhi2",
      txt: "设置",
      url: "",
      name: "set",
    },
  ];
  const handleSwitch = (val: string) => {
    console.log("handleSwitch:", val);
  };
  return (
    <div className={styles.container}>
      <Header {...obj}></Header>
      <div className={styles.main}>
        <MainNavCom handleSwitch={handleSwitch}></MainNavCom>
        <div className={styles.list}>
          {list.map((item, index) => {
            return (
              <div
                className={styles.item}
                key={index}
                onClick={() => props.history.push(item.url)}>
                <div className={`${styles.iconCon} ${styles[item.name]}`}>
                  <i className={`iconfont ${item.icon} ${styles.icon}`}></i>
                </div>
                <div className={styles.txt}>{item.txt}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default withRouter(RequireLogin(Index));
