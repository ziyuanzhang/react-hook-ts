//import Toast from "../components/global/Toast";

let isValidCodon = (codon: string, obj: object): codon is keyof typeof obj => {
  return codon in obj;
};

let obj2String = (obj: object, arr: Array<any> = [], idx: number = 0) => {
  for (let key in obj) {
    if (isValidCodon(key, obj)) {
      arr[idx++] = [key, obj[key]];
    }
  }
  return new URLSearchParams(arr).toString();
};

let commonFetcdh = (url: string, options: object, method: string = "GET") => {
  console.log("ajax-url:", url);

  let opt = {
    ...{
      appKey: "00000",
      v: "3.0",
      format: "json",
    },
    ...options,
  };

  const searchStr = obj2String(opt);
  let initObj = {};
  if (method === "GET") {
    // 如果是GET请求，拼接url
    url += "?" + searchStr;
    initObj = {
      method: method,
      headers: {
        "content-type": "application/json",
      },
    };
  } else {
    initObj = {
      method: method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: searchStr,
    };
  }
  return fetch(url, initObj)
    .then((res) => {
      // console.log("ajax-first:", res);
      if (res.status.toString().startsWith("4")) {
        window.$toast(`${res.status}:请求错误`);
      } else if (res.status.toString().startsWith("5")) {
        window.$toast(`${res.status}:服务器错误`);
      } else {
        if (res.url.indexOf("pos/posUnion/ping") > -1) {
          return { code: "success" };
        } else {
          if (
            res.headers.get("content-type") === "application/json;charset=UTF-8"
          ) {
            return res.json();
          } else {
            return res.text();
          }
        }
      }
    })
    .then((res) => {
      console.log("ajax-second:", res);
      if (typeof res == "string") {
        let start = res.indexOf("message>") + 8;
        let end = res.indexOf("</message>");
        let str = res.slice(start, end);
        window.$toast(str);
      } else {
        if (res.resultCode === 1 || res.resultCode === 202) {
          window.$toast(res.resultMsg);
        } else {
          return res;
        }
      }
    })
    .catch((err) => {
      window.$toast(JSON.stringify(err));
      console.log("ajax-err:", err);
    });
};

let axja = {
  testGet(url: string) {
    return commonFetcdh(`${url}/pos/posUnion/ping`, {});
  },
  get: (options: object) => {
    let url = localStorage.baseUrl + "/pos/router";
    return commonFetcdh(url, options);
  },
  // post: (url: string, options?: object) => {
  //   if (!options) {
  //     options = {};
  //   }
  //   return commonFetcdh(url, options, "POST");
  // },
};

export default axja;
