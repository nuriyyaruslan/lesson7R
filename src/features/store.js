import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice';
import galleryReducer from '../features/Gallery/gallerySlice';

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        gallery:galleryReducer
    },
})