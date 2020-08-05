import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";

import styles from "./footer.module.less";

const Footer: React.FC<RouteComponentProps> = (props) => {
  console.log("Footer:", props);
  let list = [
    {
      text: "收银",
      icon: "icon-shouyin3",
      url: "/",
      isSelect: props.match.url === "/" ? "active" : "",
    },
    {
      text: "数据",
      icon: "icon-shuju-",
      url: "/data",
      isSelect: props.match.url === "/data" ? "active" : "",
    },
    {
      text: "我的",
      icon: "icon-wode",
      url: "/my",
      isSelect: props.match.url === "/my" ? "active" : "",
    },
  ];
  return (
    <div className={styles.container}>
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className={`${styles[item.isSelect]} ${styles.item}`}
            onClick={() => {
              props.history.push(item.url);
            }}>
            <i className={`iconfont ${item.icon} ${styles.icon}`}></i>
            <div className={styles.txt}>{item.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default withRouter(Footer);
