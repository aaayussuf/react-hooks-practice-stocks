import React from "react";

function Stock({ stock, handleClick }) {
  return (
    <div className="stock" onClick={() => handleClick(stock)}>
      <h3>{stock.name} ({stock.ticker})</h3>
      <p>Type: {stock.type}</p>
      <p>Price: ${stock.price}</p>
    </div>
  );
}

export default Stock;