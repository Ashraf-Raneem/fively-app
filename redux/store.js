import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cart from "./cart/Cart";
import productDetail from "./productDetail/ProductDetail";

const reducer = combineReducers({
    cart: cart.reducer,
    productDetail: productDetail.reducer,
});
const store = configureStore({
    reducer,
});
export default store;
