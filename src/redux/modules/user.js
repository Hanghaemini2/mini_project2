import produce from "immer";
import { deleteCookie, setCookie } from "../../shared/Cookie";
import { apis } from "../../shared/api";

// action
const LOGIN = "user/LOGIN";
const LOGOUT = "user/LOGOUT";

// initialState
const initialState = {
  username: null,
  nickname: null,
  is_login: false,
};

// action creator
export function loginUser(userInfo) {
  return { type: LOGIN, userInfo };
}

export function logOutUser(userInfo) {
  return { type: LOGOUT, userInfo };
}

//middlewares
export const loadUser = () => {
  return async function (dispatch) {
    await apis
      .bookreviews()
      .then((user_data) => {
        dispatch(loginUser(user_data.data));
        console.log(user_data)
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
      return { list: action.book_list };
    }
    case "user/LOGOUT": {
      const new_book_list = [...state.list, action.post];
      return { list: new_book_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
