import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["JWTToken"] = `${accessToken}`;
  return config;
});

export const apis = {
  // article
  bookreviews: () => api.get("/api/bookreviews"),
  // user
  login: (id, pw) => api.post("/login", { username: id, password: pw }),
  signup: (id, nick, pw, pwcheck) =>
    api.post("/api/authenticate", {
      username: id,
      nickname: nick,
      password: pw,
      confirmPassword: pwcheck,
    }),
};
