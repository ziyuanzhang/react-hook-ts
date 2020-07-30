let isValidCodon = (codon: string, obj: object): codon is keyof typeof obj => {
  return codon in obj;
};

let obj2String = (obj: object, arr: Array<any> = [], idx: number = 0) => {
  for (let key in obj) {
    if (isValidCodon(key, obj)) {
      arr[idx++] = [key, obj[key]];
    }
  }
  // return new URLSearchParams(arr).toString();
};

let commonFetcdh = (url: string, options: object, method = "GET") => {
  const searchStr = obj2String(options);
  let initObj = {};
  if (method === "GET") {
    // 如果是GET请求，拼接url
    url += "?" + searchStr;
    initObj = {
      method: method,
      credentials: "include",
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
  fetch(url, initObj)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
};

let axja = {
  get: (url: string, options?: object) => {
    if (!options) {
      options = {};
    }
    return commonFetcdh(url, options, "GET");
  },
  post: (url: string, options?: object) => {
    if (!options) {
      options = {};
    }
    return commonFetcdh(url, options, "POST");
  },
};

export default axja;
