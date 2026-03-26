// src/components/ui/FilterTabs.jsx

import { useEffect, useState } from "react";

// const DEFAULT_FILTERS = ["all", "top", "bottom", "footwear", "accessory"];
const DEFAULT_FILTERS = [
  { value: "all", label: "All" },
  { value: "top", label: "Tops" },
  { value: "bottom", label: "Bottoms" },
  { value: "footwear", label: "Footwear" },
  { value: "accessory", label: "Accessories" },
];

function FilterTabs({ filters = DEFAULT_FILTERS, onFilterChange,active }) {
  // const [active, setActive] = useState(filters[0]);

  const handleClick = (filter) => {
    // setActive(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  return (
    <nav aria-label="wardrobe filters" className={`overflow-x-auto scrollbar-hide`}>
      <ul className="flex items-center gap-2 min-w-max">
        {filters.map(({label, value}) => (
          <li key={value}>
            <button
              onClick={() => handleClick(value)}
              className={`
              newsreader rounded-full hover:cursor-pointer
              px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2
              text-[0.65rem] sm:text-[0.68rem] md:text-[0.72rem]
              font-medium tracking-[0.10em] sm:tracking-[0.12em]
              uppercase transition-all duration-200
              ${active?.toLowerCase() === value.toLowerCase()
                  ? `bg-[#1C1C1A] text-[#FDFAF6]`
                  : `bg-transparent text-[#6B6460] hover:text-[#1A1A18]`
                }
          `}
            >
              {label}
            </button>
          </li>
        ))}
        
      </ul>
    </nav>
  );
}

export default FilterTabs;