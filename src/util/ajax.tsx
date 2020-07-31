import Toast from "../components/global/Toast";

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
  const searchStr = obj2String(options);
  let initObj = {};
  if (method === "GET") {
    // 如果是GET请求，拼接url
    url += "?" + searchStr;
    initObj = {
      method: method,
      //  credentials: "include",
    };
  } else {
    initObj = {
      method: method,
      credentials: "include",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      }),
      body: searchStr,
    };
  }
  return fetch(url, initObj)
    .then((res) => {
      console.log("ajax-first:", res);
      if (res.status.toString().startsWith("4")) {
        Toast(`${res.status}:请求错误`);
      } else if (res.status.toString().startsWith("5")) {
        Toast(`${res.status}:服务器错误`);
      } else {
        if (res.url.indexOf("pos/posUnion/ping") > -1) {
          return { code: "success" };
        } else {
          return res.json();
        }
      }
    })
    .then((res) => {
      console.log("ajax-second:", res);
      return res;
    })
    .catch((err) => {
      Toast(JSON.stringify(err));
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
