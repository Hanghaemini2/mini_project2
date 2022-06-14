import produce from "immer";
import { deleteCookie, setCookie } from "../../shared/Cookie";
import { apis } from "../../shared/api";

// action
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

// initialState
const initialState = {
  userinfo: {
    username: null,
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

//middlewares
export const loadUser = () => {
  return async function (dispatch) {
    await apis
      .bookreviews()
      .then((user_data) => {
        dispatch(login(user_data.data));
        console.log(user_data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const loginAxios = (id, pw) => {
  return async function (dispatch) {
    apis.login(id, pw).catch((err) => {
      console.log(err);
    });
  };
};

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
        is_login: true,
      };
      return { userinfo: newUserInfo };
    }
    case "user/LOGOUT": {
      deleteCookie("JWTToken");
      const newUserInfo = {
        username: null,
        is_login: false,
      };
      return { userinfo: newUserInfo };
    }
    // do reducer stuff
    default:
      return state;
  }
}
