import React, { useState, useEffect, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./index.module.less";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RequireLogin from "../components/common/RequireLogin";
import MainNavCom from "../components/MainNavCom";
import RestaurantClass from "../components/RestaurantClass";

interface PcCodeItem {
  code: string;
  descript: string;
  descriptEn: string;
  notice: string;
}

const Index: React.FC<RouteComponentProps> = (props) => {
  // console.log("index-props:", props.location);
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
  const [RestaurantClassUse, setRestaurantClassUse] = useState({
    isShow: false,
    whichShow: "",
    restaurantList: [],
  });
  const getPcCodes = useCallback(
    async (type: string) => {
      let data = {
        method: "getPcCodes",
        searchAll: true,
      };
      let res = await window.$ajax.get(data);
      if (res) {
        // console.log("index-getPcCodes:", res.data);
        if (res.data.length > 0) {
          if (
            localStorage.restaurantObj &&
            res.data.some((item: PcCodeItem) => {
              return item.code === JSON.parse(localStorage.restaurantObj).code;
            }) &&
            type === "auto"
          ) {
            setRestaurantClassUse({
              isShow: true,
              whichShow: "class",
              restaurantList: [],
            });
          } else {
            setRestaurantClassUse({
              isShow: true,
              whichShow: "restaurant",
              restaurantList: res.data,
            });
          }
        } else {
          window.$toast("请先配置营业点！").then(() => {
            props.history.push("/login");
          });
        }
      }
    },
    [props]
  );
  useEffect(() => {
    if (props.location.state) {
      getPcCodes("auto");
    }
  }, [props, getPcCodes]);
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
      {RestaurantClassUse.isShow && (
        <RestaurantClass {...RestaurantClassUse}></RestaurantClass>
      )}
    </div>
  );
};

export default withRouter(RequireLogin(Index));
