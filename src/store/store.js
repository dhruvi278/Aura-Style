import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice'
import wardrobeReducer from './slices/wardrobeSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wardrobe: wardrobeReducer,
    }
})
