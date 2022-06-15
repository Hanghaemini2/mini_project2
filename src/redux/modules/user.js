import produce from "immer";
import { deleteCookie, setCookie } from "../../shared/Cookie";
import { apis } from "../../shared/api";

// action
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";
const USERINFO = "user/USERINFO"


// initialState
const initialState = {
  userinfo: {
    username: null,
    nickname: null,
    is_login: false,
  },
};

// action creator
export function login(id) {
  return { type: LOGIN, id };
}

export function logOut(userInfo) {
  return { type: LOGOUT, userInfo };
}

export function userinfo(info) {
  return { type: LOGOUT, info };
}



//middlewares

// 유저 정보 미들웨어
// export const loadUser = () => {
//   return async function (dispatch) {
//     await apis
//       .bookreviews()
//       .then((user_data) => {
//         dispatch(login(user_data.data));
//         console.log(user_data)
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

//토큰 검사 미들웨어
export const loadUserAxios = () => {
  return async function (dispatch) {
    apis
    .usercheck()
    .then(() => {
      dispatch(userinfo())
    })
    .catch(() => {
      dispatch(logOut())
    })
  }
}

// 로그인 미들웨어
export const loginAxios = (id, pw) => {
  return async function (dispatch) {

    apis.login(id, pw)
    .then(console.log('로그인 되고 말았어'))
    .catch((err) => {
      console.log(err);
    });
  };
};

// 회원가입 미들웨어
export const signupAxios = (id, nick, pw, pwcheck) => {
  return async function (dispatch) {
    apis
      .signup(id, nick, pw, pwcheck)
      .then(() => {
        dispatch(login(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "user/LOGIN": {
      const newUserInfo = {
        username: action.id,
        nickname: state.userinfo.nickname,
        is_login: true,
      };
      return { userinfo: newUserInfo };
    }
    case "user/LOGOUT": {
      deleteCookie("JWTToken");
      const newUserInfo = {
        username: null,
        nickname: null,
        is_login: false,
      };
      return { userinfo: newUserInfo };
    }
    case "user/USERINFO":{
      const newUserInfo = {
        username: action.info.principal.user.username,
        nickname: action.info.principal.user.nickname,
        is_login: true,
      };
      return { userinfo: newUserInfo };
    }

    // do reducer stuff
    default:
      return state;
  }
}
