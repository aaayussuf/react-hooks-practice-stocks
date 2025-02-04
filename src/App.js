import React, { useState, useEffect } from "react";
import StockContainer from "./components/StockContainer";
import Portfolio from "./components/Portfolio";
import FilterBar from "./components/FilterBar";

const API_URL = "http://localhost:3001/stocks";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState(""); // "alpha" or "price"
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setStocks);
  }, []);

  const buyStock = (stock) => {
    if (!portfolio.includes(stock)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const sellStock = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  const sortedStocks = () => {
    let sorted = [...stocks];

    if (sortType === "alpha") {
      sorted.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortType === "price") {
      sorted.sort((a, b) => a.price - b.price);
    }

    return sorted;
  };

  const filteredStocks = sortedStocks().filter(
    (stock) => filter === "All" || stock.type === filter
  );

  return (
    <div>
      <FilterBar setSortType={setSortType} setFilter={setFilter} />
      <div className="row">
        <StockContainer stocks={filteredStocks} buyStock={buyStock} />
        <Portfolio portfolio={portfolio} sellStock={sellStock} />
      </div>
    </div>
  );
}

export default App;
