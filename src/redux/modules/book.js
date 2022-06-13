import produce from "immer";
import { deleteCookie, setCookie } from "../../shared/Cookie";
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
