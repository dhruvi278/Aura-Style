import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import { registerUser, loginUser, getMe, logoutUser } from '../../services/authService'
import { setToken, getToken, removeToken } from '../../utils/accessTokenStorage'


//  Tunk --------------------
export const signup = createAsyncThunk(
    'auth/signup',
    async (userData, { rejectWithValue }) => {
        try {
            const data = await registerUser(userData)
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.detail || error.response?.data?.message || 'Registration failed')
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password, remember }, { rejectWithValue }) => {
        try {
            const data = await loginUser({ email, password })
            setToken(data.access_token, remember)
            const me = await getMe()
            return me
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.detail ||
                error.response?.data?.message ||
                'Invalid email or password'
            )
        }
    }
)

export const fetchMe = createAsyncThunk(
    'auth/fetchMe',
    async (_, { rejectWithValue }) => {
        try {
            const data = await getMe()
            return data;
        } catch (error) {
            removeToken()
            return rejectWithValue(
                error.response?.data?.detail || 'Session expired'
            )
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await logoutUser()
        } catch (error) {
            // ignore error
        } finally {
            removeToken()
        }
    }
)


// Slice -----------------

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
        isInitialized: false
    },
    reducers: {
        clearError: (state) => state.error = null,
        setInitialized: (state) => {
            state.isInitialized = true
        }
    },
    extraReducers: (builder) => {
        builder
            // register
            .addCase(signup.pending, (state) => { state.loading = true; state.error = null })
            .addCase(signup.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // login
            .addCase(login.pending, (state) => { state.loading = true; state.error = null })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            // fetchMe
            .addCase(fetchMe.pending, (state) => { state.loading = true })
            .addCase(fetchMe.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.isInitialized = true
            })
            .addCase(fetchMe.rejected, (state, action) => {
                state.loading = false
                state.user = null
                state.isInitialized = true
            })

            // logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.error = null
            })
    }
})

export const { clearError, setInitialized } = authSlice.actions
export default authSlice.reducer;