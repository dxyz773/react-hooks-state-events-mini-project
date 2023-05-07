import React, { useState } from "react";

function CategoryFilter({ categories, filterTask }) {
  const [selected, setSelected] = useState(false);
  function handleSelectedClass(e) {
    setSelected((selected) => !selected);
    e.target.className = selected ? "selected" : null;
  }

  const displayedCategory = categories.map((category) => (
    <button key={category} onClick={handleSelectedClass} className={""}>
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
