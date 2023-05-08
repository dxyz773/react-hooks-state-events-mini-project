import React, { useState } from "react";

function CategoryFilter({ categories, filter, selected }) {
  const displayedCategory = categories.map((category) => (
    <button
      key={category}
      className={selected === category ? "selected" : ""}
      onClick={() => filter(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayedCategory}
    </div>
  );
}

export default CategoryFilter;
