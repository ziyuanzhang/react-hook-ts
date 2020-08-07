import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./RestaurantClass.module.less";
interface PcCodeItem {
  code: string;
  descript: string;
  descriptEn: string;
  notice: string;
}
interface classItem {
  descript: string;
  code: string;
  codeCategory: string;
  groupCode: string;
  flag: string;
}
interface restaurantClassProps extends RouteComponentProps {
  whichShow: string;
  restaurantList?: Array<PcCodeItem>;
  classList?: Array<classItem>;
}

const RestaurantClass: React.FC<restaurantClassProps> = (props) => {
  console.log("RestaurantClass-props:", props);
  let [whichShow, setWhichShow] = useState(props.whichShow);
  let [classList, setClassList] = useState([]);
  let pcCode: PcCodeItem = localStorage.restaurantObj
    ? JSON.parse(localStorage.restaurantObj)
    : { code: "", descript: "", descriptEn: "", notice: "" };

  const handleRestaurant = (item: PcCodeItem) => {
    //  console.log("RestaurantClass-item:", item);
    pcCode = item;
    getClassList();
    setWhichShow("class");
  };
  const getClassList = async () => {
    let data = {
      method: "shiftList",
      pccode: pcCode.code,
    };
    let res = await window.$ajax.get(data);
    if (res) {
      if (res.data.length > 0) {
        classList = res.data;
        setClassList(res.data);
      } else {
        window.$toast("请先配置班别！").then(() => {
          props.history.push("/login");
        });
      }
    }
  };
  let handleClass = (item: classItem) => {
    console.log("RestaurantClass-item:", item);
  };

  const restaurantContent = (
    <div className={styles.content}>
      <div className={styles.title}>请确定您要登录的店铺</div>
      <div className={styles.list}>
        {props.restaurantList &&
          props.restaurantList.map((item, index) => {
            return (
              <div
                className={styles.item}
                key={index}
                onClick={() => handleRestaurant(item)}>
                {item.descript}
              </div>
            );
          })}
      </div>
    </div>
  );
  const classContent = (
    <div className={styles.content}>
      <div className={styles.title}>请选择班别</div>
      <div className={styles.list}>
        {classList.map((item: classItem, index) => {
          return (
            <div
              className={styles.item}
              key={index}
              onClick={() => handleClass(item)}>
              {item.descript}
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className={styles.cantainer}>
      <div className={styles.main}>
        {whichShow === "restaurant" ? restaurantContent : classContent}
      </div>
      <div className={styles.bg}></div>
    </div>
  );
};

export default withRouter(RestaurantClass);
