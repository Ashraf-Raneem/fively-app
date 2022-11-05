import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const foundIndex = state.cartList.findIndex((item) => item.id === action.payload.id);
            if (foundIndex === -1) {
                const cartItem = {
                    id: action.payload.id,
                    quantity: 0,
                    property: action.payload,
                };
                state.cartList = [...state.cartList, cartItem];
            } else {
                state.cartList[foundIndex].quantity++;
            }
        },
        removeFromCart: (state, action) => {
            const newList = state.cartList.filter((item) => item.id !== action.payload.id);
            state.cartList = newList;
        },
    },
});

export default cart;
