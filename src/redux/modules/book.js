import produce from "immer";
import { apis } from "../../shared/api";

// Actions
const LOAD = "book/LOAD";
const CREATE = "book/CREATE";
const PAGE = "book/PAGE";
const UPDATE = "book/UPDATE"
const DETAIL = "book/DETAIL"

// Initial State
const initialState = {
  list: [],
  post: {},
  currentPage: 0,
};

// Action Creators
export function loadBook(book_list) {
  return { type: LOAD, book_list };
}

export function createBook(book) {
  return { type: CREATE, book };
}

export function editBook(book_edit) {
  return { type: UPDATE, book_edit };
}

export function changePage(page) {
  return { type: PAGE, page };
}

export function detailPage(detail) {
  return { type: PAGE, detail };
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

export const loadDetailAxios = (id) => {
  return async function (dispatch) {
    await apis
      .bookDetail(id)
      .then((book_data) => {
        dispatch(detailPage(book_data.data));
        console.log(book_data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postBookAxios = (title, body, buyURL, starPoint, image) => {
  return async function (dispatch) {
    await apis.bookpost(title, body, buyURL, starPoint, image).catch((err) => {
      console.log(err);
    });
  };
};

export const likeAxios = (id) => {
  return async function (dispatch) {
    await apis.likeit(id)

    .catch((err) => {
      console.log(err);
    });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "book/LOAD": {
      return { list: action.book_list, post: state.post, currentPage: state.currentPage };
    }
    case "book/CREATE": {
      const new_book_list = [...state.list, action.post];
      return { list: new_book_list, post: state.post, currentPage: state.currentPage };
    }
    case "book/PAGE": {
      return { list: state.list, post: state.post, currentPage: action.page };
    }
    case "book/UPDATE": {
      // const UPDATE = [...state.list, action.book_edit];
      return { list: action.book_edit, post: state.post, currentPage: state.currentPage };
    }
    case "book/DETAIL": {
      return { list: state.list, post: action.detail, currentPage: state.currentPage };
    }


    // do reducer stuff
    default:
      return state;
  }
}
