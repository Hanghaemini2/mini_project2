import produce from "immer";
import { apis } from "../../shared/api";

// Actions
const LOAD = "book/LOAD";
const CREATE = "book/CREATE";

// Initial State
const initialState = {
  list: [],
};

// Action Creators
export function loadBook(book_list) {
  return { type: LOAD, book_list };
}

export function createBook(book) {
  return { type: CREATE, book };
}

//middlewares
export const loadBookAxios = () => {
  return async function (dispatch) {
    await apis
      .bookreviews()
      .then((book_data) => {
        dispatch(loadBook(book_data.data));
        console.log(book_data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export const postBookAxios = (title, body, buyURL, starPoint, image) => {
  return async function (dispatch) {
    await apis
      .bookpost(title, body, buyURL, starPoint, image)
      .catch((err) => {
        console.log(err);
      });
  };
};


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "book/LOAD": {
      return { list: action.book_list };
    }
    case "book/CREATE": {
      const new_book_list = [...state.list, action.post];
      return { list: new_book_list };
    }
    // do reducer stuff
    default:
      return state;
  }
}
