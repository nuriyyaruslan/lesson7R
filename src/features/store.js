import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice';

export const store = configureStore({
    reducer:{
        counter:counterReducer
    },
})