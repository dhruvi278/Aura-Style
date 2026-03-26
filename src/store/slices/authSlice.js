import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
  updateProfile,
  deleteAccount,
} from "../../services/authService";
import { setToken, removeToken } from "../../utils/accessTokenStorage";

//  Tunk --------------------
export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUser(userData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Registration failed",
      );
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password, remember }, { rejectWithValue }) => {
    try {
      const data = await loginUser({ email, password });
      setToken(data.access_token, remember);
      const me = await getMe();
      return me;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Invalid email or password",
      );
    }
  },
);

export const fetchMe = createAsyncThunk(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMe();
      return data;
    } catch (error) {
      removeToken();
      return rejectWithValue(
        error.response?.data?.detail || "Failed to get Profile",
      );
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await logoutUser();
  } catch (error) {
    console.log(error);
  } finally {
    removeToken();
  }
});

export const saveProfile = createAsyncThunk(
  "auth/saveProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      await updateProfile(profileData);
      const me = await getMe();

      return me;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.detail ||
          error.response?.data?.message ||
          "Failed to updata profile",
      );
    }
  },
);

export const deleteUserAccount = createAsyncThunk(
  "auth/deleteAccount",
  async (_, { rejectWithValue }) => {
    try {
      await deleteAccount();
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.detail || "Delete account failed",
      );
    } finally {
      removeToken();
    }
  },
);

// Slice -----------------

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    isInitialized: false,
    updateLoading: false,
    updateError: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearUpdateError: (state) => {
      state.updateError = null;
    },
    setInitialized: (state) => {
      state.isInitialized = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // register
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetchMe
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isInitialized = true;
      })
      .addCase(fetchMe.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isInitialized = true;
      })

      // logout
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.error = null;
      })

      //save profile
      .addCase(saveProfile.pending, (state) => {
        state.updateLoading = true;
        state.updateError = null;
      })

      .addCase(saveProfile.fulfilled, (state, action) => {
        state.updateLoading = false;
        state.user = action.payload;
      })
      .addCase(saveProfile.rejected, (state, action) => {
        state.updateLoading = false;
        state.updateError = action.payload;
      })

      // delete account
      .addCase(deleteUserAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.error = null;
      })
      .addCase(deleteUserAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearUpdateError, setInitialized } =
  authSlice.actions;
export default authSlice.reducer;
