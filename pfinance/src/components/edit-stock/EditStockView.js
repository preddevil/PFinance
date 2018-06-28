import React from "react";

const EditStockView = props => {
  let isAddNew = props.isAddNew;
  return (
    <div>
      {isAddNew ? (
        <form action="">
          <select>
            {props.stockList.map(stock => (
              <option key={stock.symbol} value={stock.symbol}>
                {stock.symbol}
              </option>
            ))}
          </select>
          <br/>
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </div>
  );
};

export default EditStockView;
