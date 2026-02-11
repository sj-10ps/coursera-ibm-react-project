import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./redux/Cartslice";

export const store=configureStore({
    reducer:{
        cart:CartReducer
    }
})