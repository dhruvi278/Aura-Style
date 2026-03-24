import { configureStore } from "@reduxjs/toolkit";
import wardrobeReducer from './slices/wardrobeSlice'

export const store =    configureStore({
    reducer:{
        wardrobe: wardrobeReducer,
    },
});