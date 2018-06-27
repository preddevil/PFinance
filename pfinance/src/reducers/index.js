import {combineReducers} from 'redux';
import stocks, { getAllStocksFromIds } from './stocks';

const root = combineReducers({
    stocks
});

export const getAllStocks = (state) => getAllStocksFromIds(state.stocks);

export default root;