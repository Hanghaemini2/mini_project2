import { apis } from "../../shared/api";

// Actions
const LOAD = "book/LOAD";
const CREATE = "book/CREATE";
const PAGE = "book/PAGE";
const UPDATE = "book/UPDATE";
const DETAIL = "book/DETAIL";
const DELETE = "book/DELETE";

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
  return { type: DETAIL, detail };
}

export function deleteBook(delbook) {
  return { type: DELETE, delbook };
}

//middlewares
export const loadBookAxios = (pageViewNum) => {
  return async function (dispatch) {
    await apis
      .bookreviews(pageViewNum)
      .then((book_data) => {
        dispatch(loadBook(book_data.data));
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postBookAxios = (frm) => {
  return async function (dispatch) {
    await apis.bookpost(frm).catch((err) => {
      alert("로그인을 해주세요!");
    });
  };
};

export const likeAxios = (id) => {
  return async function (dispatch) {
    await apis
      .likeit(id)

      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteAxios = (id) => {
  return async function () {
    let success = null;
    await apis
      .bookDelete(id)
      .then((del) => {
        success = true;
      })
      .catch((err) => {
        console.log(err);
        success = false;
      });
    return success;
  };
};

export const editBookAxios = (id, title, content, rate, url) => {
  return async function (dispatch) {
    console.log(content);
    await apis
      .editBook(id, title, content, rate, url)
      .then((res) => {})
      .catch((err) => {
        alert("해당 게시물을 작성한 유저만 수정할 수 있습니다!");
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "book/LOAD": {
      return {
        list: action.book_list,
        post: state.post,
        currentPage: state.currentPage,
      };
    }
    case "book/CREATE": {
      const new_book_list = [...state.list, action.post];
      return {
        list: new_book_list,
        post: state.post,
        currentPage: state.currentPage,
      };
    }
    case "book/PAGE": {
      return { list: state.list, post: state.post, currentPage: action.page };
    }
    case "book/UPDATE": {
      // const UPDATE = [...state.list, action.book_edit];
      return {
        list: action.book_edit,
        post: state.post,
        currentPage: state.currentPage,
      };
    }
    case "book/DETAIL": {
      return {
        list: state.list,
        post: action.detail,
        currentPage: state.currentPage,
      };
    }
    case "book/DELETE": {
      return {
        list: state.list,
        post: action.delbook,
        currentPage: state.currentPage,
      };
    }

    // do reducer stuff
    default:
      return state;
  }
}
