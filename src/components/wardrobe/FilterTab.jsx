// src/components/ui/FilterTabs.jsx

import { useEffect, useState } from "react";

const DEFAULT_FILTERS = ["All", "Tops", "Bottoms", "Footwear", "Accessories"];

function FilterTabs({ filters = DEFAULT_FILTERS, onFilterChange }) {
  const [active, setActive] = useState(filters[0]);

  const handleClick = (filter) => {
    setActive(filter);
    if (onFilterChange) onFilterChange(filter);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav aria-label="wardrobe filters" className={`overflow-x-auto scrollbar-hide ${scrolled ? `pb-0 border-b-0` : `pb-2 sm:pb-4 lg:pb-6 border-b border-[#E7E1CF]/50`}`}>
      <ul className="flex items-center gap-2 min-w-max">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              onClick={() => handleClick(filter)}
              className={`
              newsreader rounded-full hover:cursor-pointer
              px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2
              text-[0.65rem] sm:text-[0.68rem] md:text-[0.72rem]
              font-medium tracking-[0.10em] sm:tracking-[0.12em]
              uppercase transition-all duration-200
              ${active === filter
                  ? "bg-[#1C1C1A] text-[#FDFAF6]"
                  : "bg-transparent text-[#6B6460] hover:text-[#1A1A18]"
                }
          `}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FilterTabs;