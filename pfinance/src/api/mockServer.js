const mockData = [
  {
    symbol: "MSFT",
    price: "101.9800",
    volume: "25869092",
    timestamp: "2018-06-20 16:00:32"
  },
  {
    symbol: "FB",
    price: "202.0800",
    volume: "27946741",
    timestamp: "2018-06-20 16:04:57"
  },
  {
    symbol: "AAPL",
    price: "186.5100",
    volume: "20205324",
    timestamp: "2018-06-20 16:09:28"
  }
];

const getAllStocks = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 100);
  });
};

module.exports = {
  getAllStocks
};
