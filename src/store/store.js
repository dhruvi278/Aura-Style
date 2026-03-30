import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'
import wardrobeReducer from './slices/wardrobeSlice'
import historyReducer from './slices/historySlice'

import outfitReducer from './slices/outfitSlice'
import supportReducer from './slices/supportSlice'
export const store = configureStore({
    reducer: {
        auth: authReducer,
        wardrobe: wardrobeReducer,
        history: historyReducer,
        outfit: outfitReducer,
        support: supportReducer,
    }
})
