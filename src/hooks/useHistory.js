import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  fetchOutfitHistory,
  setDateRange,
  setSearchOccasion,
} from "../store/slices/historySlice";

const useOutfitHistory = () => {
  const dispatch = useDispatch();
  const { outfits, loading, error, searchOccasion, dateRange } = useSelector(
    (state) => state.history,
  );

  useEffect(() => {
    dispatch(fetchOutfitHistory());
  }, []);

  const filteredOutfits = useMemo(() => {
    let result = [...outfits];

    if (searchOccasion.trim()) {
      result = result.filter((o) =>
        o.occasion?.toLowerCase().includes(searchOccasion.toLowerCase()),
      );
    }

    if (dateRange.from) {
      result = result.filter(
        (o) => new Date(o.created_at) >= new Date(dateRange.from),
      );
    }

    if (dateRange.to) {
      result = result.filter(
        (o) => new Date(o.created_at) <= new Date(dateRange.to),
      );
    }

    return result;
  }, [outfits, searchOccasion, dateRange]);

  const handleSearch = (val) => dispatch(setSearchOccasion(val));
  const handleDateRange = (range) => dispatch(setDateRange(range));
  const handleClear = () => dispatch(clearFilters());

  return {
    outfits,
    filteredOutfits,
    totalOutfits: outfits.length,
    loading,
    error,
    searchOccasion,
    dateRange,
    handleSearch,
    handleDateRange,
    handleClear,
  };
};

export default useOutfitHistory
