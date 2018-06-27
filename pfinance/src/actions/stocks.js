import * as constants from "../constants";
import api from "../api/mockServer";

export const fetchStockSymbols = () => (dispatch, state) => {
  dispatch({
    type: constants.FETCH_STOCKS_START
  });
  return api.getAllStocks().then(result => {
    dispatch({
      type: constants.FETCH_STOCKS_SUCCESS,
      payload: result
    });
  });
};
