import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.less";
interface headerProps {
  leftUrl?: string;
  centerTxt: string;
  rightIcon?: string;
  rightTxt?: string;
  rightFun?: () => void;
}

const Header: React.FC<headerProps> = (props) => {
  //  console.log("header-prop:", props);
  return (
    <div className={styles.container}>
      {props.leftUrl && (
        <Link to={props.leftUrl} className={styles.left}>
          <i className={`iconfont icon-fangxiang ${styles.icon}`}></i>
          <div className={styles.txt}>返回</div>
        </Link>
      )}
      <div className={styles.center}>{props.centerTxt}</div>
      {props.rightFun && (
        <div
          className={styles.right}
          onClick={() => {
            props.rightFun ? props.rightFun() : console.log("0");
          }}>
          {props.rightIcon && (
            <i className={`iconfont ${props.rightIcon} ${styles.icon}`}></i>
          )}
          {props.rightTxt && <div className={styles.txt}>{props.rightTxt}</div>}
        </div>
      )}
    </div>
  );
};

export default Header;
