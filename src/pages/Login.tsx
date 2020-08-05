import React, { useRef } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "../components/common/Header";
import styles from "./login.module.less";
import md5 from "js-md5";

const Login: React.FC<RouteComponentProps> = (props) => {
  console.log("Login:", props);
  const obj = {
    centerTxt: "登录",
  };
  const groupCodeRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passWordRef = useRef<HTMLInputElement>(null);

  let groupDefaultVal: string = "";
  let userNamDefaultVal: string = "";
  const loginInfo = localStorage.loginInfo
    ? JSON.parse(localStorage.loginInfo)
    : null;
  if (loginInfo) {
    groupDefaultVal = loginInfo.hotelCode;
    userNamDefaultVal = loginInfo.userCode;
  }
  let handlePost = async () => {
    if (groupCodeRef.current && userNameRef.current && passWordRef.current) {
      let data = {
        method: "loginApp",
        hotelCode: groupCodeRef.current.value.toUpperCase().trim(),
        userName: userNameRef.current.value.toUpperCase().trim(),
        password: md5(passWordRef.current.value.toUpperCase().trim()),
        magicNo: "1234567",
      };
      let res = await window.$ajax.get(data);
      if (res) {
        localStorage.loginInfo = JSON.stringify(res.data);
        props.history.push("/");
      }
    }
  };
  return (
    <div className={styles.container}>
      <Header {...obj}></Header>
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.title}>大风系统</div>
          <div className={styles.subTitle}>gale gale gale gale</div>

          <input
            type="text"
            className={styles.input}
            placeholder="集团代码"
            defaultValue={groupDefaultVal}
            ref={groupCodeRef}
          />
          <input
            type="text"
            ref={userNameRef}
            className={styles.input}
            defaultValue={userNamDefaultVal}
            placeholder="用户名"
          />
          <input
            type="password"
            ref={passWordRef}
            className={styles.input}
            placeholder="密码"
          />

          <div className={styles.btn} onClick={handlePost}>
            登录
          </div>
          <Link to="/linkSet" className={styles.setContainer}>
            <div className={`iconfont icon-shezhi2 ${styles.icon}`}></div>
            <div className={styles.txt}>链接设置</div>
          </Link>
        </div>
        <div className={styles.producer}>大风科技支持</div>
      </div>
    </div>
  );
};

export default withRouter(Login);
