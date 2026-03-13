// src/components/ui/FilterTabs.jsx

import { useState } from "react";

const DEFAULT_FILTERS = ["All", "Tops", "Bottoms", "Footwear", "Accessories"];

function FilterTabs({ filters = DEFAULT_FILTERS, onFilterChange }) {
  const [active, setActive] = useState(filters[0]);

  const handleClick = (filter) => {
    setActive(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap w-full">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`
            newsreader
            px-5 py-2 rounded-full
            text-[0.72rem] font-medium tracking-[0.12em] uppercase
             transition-all duration-200
            ${active === filter
              ? "bg-[#1C1C1A] text-[#FDFAF6]"
              : "bg-transparent text-[#6B6460] hover:text-[#1A1A18]"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;