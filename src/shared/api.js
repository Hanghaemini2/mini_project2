import axios from "axios";

// axios create (axios 골격)
const imgApi = axios.create({
  baseURL: "http://15.164.218.19",
  headers: {
    "content-type": "multipart/form-data",
  },
});

const api = axios.create({
  baseURL: "http://15.164.218.19",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// interruptor (유저의 로그인 정보)
api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

imgApi.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  return config;
});

// api body
export const apis = {
  // article (에이젝스 요청)
  bookreviews: () => api.get("/api/bookreviews"),
  bookpost: (title, body, buyURL, starPoint, image) =>
    imgApi.post("/bookpost", {
      bookBuyUrl: buyURL,
      rank: starPoint,
      file: image,
      title: title,
      content: body,
    }),
  likeit: () => api.post("/api/bookreviews/like"),
  bookDetail: (id) => api.get("/bookreview/" + id),

  // user
  login: (id, pw) =>
    api.post("/api/authenticate", { username: id, password: pw }),
  signup: (id, nick, pw, pwcheck) =>
    api.post("/api/signup", {
      username: id,
      nickname: nick,
      password: pw,
      confirmPassword: pwcheck,
    }),
  usercheck: () => api.get("/api/authentication"),
};
