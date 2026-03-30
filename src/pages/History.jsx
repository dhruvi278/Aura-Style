import DateFilter from "../components/History/Filter/DateFilter";
import SearchOutfit from "../components/History/Filter/SearchOutfit";

import TitleText from "../components/ui/TitleText";
import Card from "../components/ui/Card";
import CardGrid from "../components/ui/CardGrid";
import Pagination from "../components/ui/Pagination";
import TotalItems from "../components/wardrobe/TotalItems";
import useOutfitHistory from "../hooks/useHistory";
import { useEffect, useState } from "react";

function History() {
  const {
    filteredOutfits,
    totalOutfits,
    loading,
    error,
    searchOccasion,
    dateRange,
    handleSearch,
    handleDateRange,
    handleClear,
  } = useOutfitHistory();

  const itemPerPage = 4;
  const totalPage = Math.ceil(filteredOutfits.length / itemPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const startIdx = (currentPage - 1) * itemPerPage;
  const endIdx = startIdx + itemPerPage;
  const currentOutfits = filteredOutfits.slice(startIdx, endIdx);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchOccasion, dateRange]);
  return (
    <div className="page-enter px-4 sm:px-6 lg:px-10 pt-10 pb-10 bg-[#F7F4EF] flex flex-col gap-8 min-h-[calc(100dvh-72px)] lg:min-h-[calc(100dvh-80px)]">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-3 ">
        <header>
          <TitleText title="Your Style Archive" description="" />
        </header>

        <TotalItems items={totalOutfits} items_name={`look`} />

        {/* Search + Date Range */}
        <section>
          <div className="flex flex-col gap-4 lg:flex-row sm:items-start sm:justify-between lg:items-end">
            <SearchOutfit onChange={handleSearch} value={searchOccasion} />
            <DateFilter onDateChange={handleDateRange} />
          </div>
        </section>

        {totalOutfits === 0 && (
          <section
            aria-label="Empty history"
            className="w-full flex flex-col items-center justify-center py-20 gap-3"
          >
            <p className="playfair italic font-semibold text-2xl text-[#1C1C1A]">
              No looks yet
            </p>
            <p className="jost text-sm text-[#6B6460]">
              Your generated outfits will appear here
            </p>
          </section>
        )}
        {totalOutfits > 0 && filteredOutfits.length === 0 && (
          <section
            aria-label="No results"
            className="w-full flex flex-col items-center justify-center py-20 gap-3"
          >
            <p className="playfair italic text-2xl text-[#1C1C1A]">
              No outfits found
            </p>
            <p className="jost text-sm text-[#6B6460]">
              Try adjusting your search or date range
            </p>
          </section>
        )}

        {/* Card Grid */}
        <section>
          <CardGrid showUpload={false}>
            {filteredOutfits &&
              currentOutfits.map((item, i) => (
                <Card
                  key={item.outfit_id}
                  cardTitle={item.occasion}
                  cardText={new Date(item.created_at)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
                  selectedOutfit={item.is_selected}
                  src={
                    item.tryon_image
                      ? item.tryon_image
                      : "https://images.pexels.com/photos/6899209/pexels-photo-6899209.jpeg"
                  }
                  alt={`outfit for ${item.occasion}`}
                />
              ))}
          </CardGrid>
        </section>
      </div>
      {filteredOutfits.length > 0 && (
        <Pagination
          onPageChange={setCurrentPage}
          totalPages={totalPage}
          currentPage={currentPage}
        />
      )}
    </div>
  );
}

export default History;
