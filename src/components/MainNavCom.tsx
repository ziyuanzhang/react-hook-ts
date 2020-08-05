import React from "react";

import styles from "./MainNavCom.module.less";

interface MainNavComProps {
  handleSwitch: () => void;
}

const MainNavCom: React.FC<MainNavComProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left} onClick={props.handleSwitch}>
        <i className={`iconfont icon-canting ${styles.restaurantIcon}`}></i>
        <div className={styles.txt}>中餐餐厅</div>
        <i className={`iconfont icon-fangxiang ${styles.arrowIcon}`}></i>
      </div>
      <i className={`iconfont icon-saoma ${styles.scanIcon}`}></i>
    </div>
  );
};

export default MainNavCom;
