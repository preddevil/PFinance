import React from "react";
import { NavLink } from "react-router-dom";

const StockPageView = props => {
  let listOfStocks = props.stockList || [];

  return (
    <div>
      <table
        align="center"
        cellSpacing="6"
        cellPadding="4"
        id="mytable"
        border="1"
      >
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Timestamp</th>
            <th>
              <NavLink to="/add">Add</NavLink>
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          {listOfStocks.map(stock => {
            return <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.price}</td>
                <td>{stock.volume}</td>
                <td>{stock.timestamp}</td>
                <td>
                  <NavLink to={`/edit/${stock.symbol}`}>
                    Edit
                  </NavLink>
                </td>
              </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockPageView;
