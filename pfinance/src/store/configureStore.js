import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import root from "../reducers";

const configureStore = () => {
  return createStore(root, applyMiddleware(thunk));
};

export default configureStore;
