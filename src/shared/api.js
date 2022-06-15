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
// Bearer가 백엔드의 토큰을 검사함

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  if (accessToken !== undefined) {
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

imgApi.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  if (accessToken !== undefined) {
    config.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

// api body
export const apis = {
  // article (에이젝스 요청)
  bookreviews: () => api.get("/api/bookreviews"),
  bookpost: (title, body, starPoint, buyURL, image) =>
    imgApi.post("/api/bookreview", {
      bookBuyUrl: buyURL,
      rank: starPoint,
      file: image,
      title: title,
      content: body,
    }),
  likeit: (id) => api.post(`/api/bookreviews/${id}/like`),
  bookDetail: (id) => api.get(`/api/bookreviews/${id}`),

  // user
  login: (id, pw) =>
    api.post("/api/authenticate", { username: id, password: pw }),
  logout: () => api.post("/logout", {}),
  signup: (id, nick, pw, pwcheck) =>
    api.post("/api/signup", {
      username: id,
      nickname: nick,
      password: pw,
      confirmPassword: pwcheck,
    }),
  usercheck: () => api.get("/api/authentication"),
};
