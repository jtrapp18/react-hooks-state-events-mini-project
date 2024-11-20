import React from "react";

function CategoryFilter({categories, selCategory, setSelCategory}) {

  const handleClick = (e) => {
    setSelCategory(e.target.value);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => 
        <button 
          key={category} 
          className={category===selCategory ? "selected" : ""} 
          value={category} 
          onClick={handleClick}
        >
          {category}
        </button>
      )}
    </div>
  );
}

export default CategoryFilter;
