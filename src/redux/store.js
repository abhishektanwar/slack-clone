import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/appSlice";
// import { createStore } from 'redux';

export const store =  configureStore({
    reducer:{
        app:appReducer,
    },
});

