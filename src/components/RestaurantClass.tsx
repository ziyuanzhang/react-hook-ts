import React, { useState, useRef } from "react";
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
  restaurantList: Array<PcCodeItem>;
  handleSwitchEnd: () => void;
}
interface restaurantClassArr {
  whichShow: string;
  restaurantList: Array<PcCodeItem>;
  classList: Array<classItem>;
}
const RestaurantClass: React.FC<restaurantClassProps> = (props) => {
  // console.log("RestaurantClass-props:", props);

  let [paramObj, setParamObj] = useState<restaurantClassArr>({
    whichShow: props.whichShow,
    restaurantList: props.restaurantList,
    classList: [],
  });
  let pcCodeRef = useRef<PcCodeItem>(
    localStorage.restaurantObj
      ? JSON.parse(localStorage.restaurantObj)
      : { code: "", descript: "", descriptEn: "", notice: "" }
  );

  const handleRestaurant = (item: PcCodeItem) => {
    //  console.log("RestaurantClass-item:", item);
    pcCodeRef.current = item;

    getClassList();
  };
  const getClassList = async () => {
    let data = {
      method: "shiftList",
      pccode: pcCodeRef.current.code,
    };
    let res = await window.$ajax.get(data);
    if (res) {
      if (res.data.length > 0) {
        setParamObj({
          whichShow: "class",
          restaurantList: [],
          classList: res.data,
        });
      } else {
        window.$toast("请先配置班别！").then(() => {
          props.history.push("/login");
        });
      }
    }
  };
  let handleClass = (item: classItem) => {
    console.log("RestaurantClass-item:", item);
    localStorage.restaurantObj = JSON.stringify(pcCodeRef.current);

    sessionStorage.shiftObj = JSON.stringify(item);
    props.handleSwitchEnd();
  };

  const restaurantContent = (
    <div className={styles.content}>
      <div className={styles.title}>请确定您要登录的店铺</div>
      <div className={styles.list}>
        {paramObj.restaurantList.map((item, index) => {
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
        {paramObj.classList.map((item, index) => {
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
        {paramObj.whichShow === "restaurant" ? restaurantContent : classContent}
      </div>
      <div className={styles.bg}></div>
    </div>
  );
};

export default withRouter(RestaurantClass);
