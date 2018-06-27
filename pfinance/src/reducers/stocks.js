import { combineReducers } from "redux";
import * as constants from "../constants";

const byIds = (state = {}, action) => {
  switch (action.type) {
    case constants.FETCH_STOCKS_SUCCESS:
      let cloneState = { ...state };
      action.payload.forEach(data => {
        cloneState[data.symbol] = data;
      });
      return cloneState;

    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_STOCKS_SUCCESS:
      let fetchIds = action.payload.map(data => data.symbol);
      return state.concat(fetchIds);
    default:
      return state;
  }
};

const stocks = combineReducers({
  byIds,
  allIds
});

export const getAllStocksFromIds = (state) => state.allIds.map(id => state.byIds[id]);

export default stocks;
