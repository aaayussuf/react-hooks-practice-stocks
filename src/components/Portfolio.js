import React from "react";
import Stock from "./Stock";

function Portfolio({ portfolio, sellStock }) {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock key={stock.id} stock={stock} handleClick={sellStock} />
      ))}
    </div>
  );
}

export default Portfolio;