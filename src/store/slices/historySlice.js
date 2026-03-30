import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchHistory } from "../../services/history";

export const fetchOutfitHistory = createAsyncThunk(
  "history/fetchHistory",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchHistory();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.detail || "Failed to fetch history",
      );
    }
  },
);

const historySlice = createSlice({
  name: "history",
  initialState: {
    outfits: [],
    loading: false,
    error: null,
    totalOutfits: 0,
    searchOccasion: "",
    dateRange: { from: null, to: null },
  },
  reducers: {
    setSearchOccasion: (state, action) => {
      state.searchOccasion = action.payload;
    },
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
    clearFilters: (state) => {
      state.searchOccasion = "";
      state.dateRange = { from: null, to: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOutfitHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOutfitHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.outfits = action.payload;
        state.totalOutfits = action.payload.length;
      })
      .addCase(fetchOutfitHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearchOccasion, setDateRange, clearFilters } = historySlice.actions;
export default historySlice.reducer;
