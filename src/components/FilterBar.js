import React from "react";

function FilterBar({ setSortType, setFilter }) {
  return (
    <div className="filter-bar">
      <h2>Filter & Sort Stocks</h2>

      <label>Sort By: </label>
      <select onChange={(e) => setSortType(e.target.value)}>
        <option value="">None</option>
        <option value="alpha">Alphabetically</option>
        <option value="price">By Price</option>
      </select>

      <label>Filter By Type: </label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Health">Health</option>
      </select>
    </div>
  );
}

export default FilterBar;