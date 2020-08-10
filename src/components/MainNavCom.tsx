import React from "react";

import styles from "./MainNavCom.module.less";
interface PcCodeItem {
  code: string;
  descript: string;
  descriptEn: string;
  notice: string;
}
interface MainNavComProps {
  pcCode: PcCodeItem;
  handleSwitch: (val: string) => void;
}

const MainNavCom: React.FC<MainNavComProps> = (props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.left}
        onClick={() => {
          props.handleSwitch("restaurant");
        }}>
        <i className={`iconfont icon-canting ${styles.restaurantIcon}`}></i>
        <div className={styles.txt}>{props.pcCode.descript}</div>
        <i className={`iconfont icon-fangxiang ${styles.arrowIcon}`}></i>
      </div>
      <i
        className={`iconfont icon-saoma ${styles.scanIcon}`}
        onClick={() => {
          props.handleSwitch("scan");
        }}></i>
    </div>
  );
};

export default MainNavCom;
