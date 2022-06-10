import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import book from "./modules/book";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ book });
const enhancer = applyMiddleware(...middlewares);

const store = legacy_createStore(rootReducer, enhancer);

export default store;
