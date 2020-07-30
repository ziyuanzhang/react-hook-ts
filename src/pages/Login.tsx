import React, { useRef } from "react";
import { Link, RouteComponentProps } from "@reach/router";
import Header from "../components/Header";
import styles from "../css/login.module.less";

const Login: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  console.log("Login:", props);
  const obj = {
    centerTxt: "登录",
  };
  const groupCodeRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passWordRef = useRef<HTMLInputElement>(null);
  function handlePost() {
    if (groupCodeRef.current && userNameRef.current && passWordRef.current) {
      console.log("sss:", groupCodeRef.current.value);
      console.log("sss:", userNameRef.current.value);
      console.log("sss:", passWordRef.current.value);
    }
  }
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
            ref={groupCodeRef}
          />
          <input
            type="text"
            ref={userNameRef}
            className={styles.input}
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

export default Login;
