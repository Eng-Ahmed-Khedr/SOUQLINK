import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart.slice"
import authReducer from "./slices/login.slice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer

    }
});