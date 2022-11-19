import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        subTotal: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const foundIndex = state.cartList.findIndex((item) => item.id === action.payload.id);
            if (foundIndex === -1) {
                const cartItem = {
                    id: action.payload.id,
                    quantity: 1,
                    ...action.payload,
                };
                state.cartList = [...state.cartList, cartItem];
            } else {
                const cartItem = state.cartList[foundIndex];
                cartItem.quantity = cartItem.quantity + 1;
                state.cartList[foundIndex] = cartItem;
            }
            state.subTotal = state.subTotal + action.payload.price;
        },
        decreaseFromCart: (state, action) => {
            const foundIndex = state.cartList.findIndex((item) => item.id === action.payload);
            if (foundIndex !== -1) {
                if (state.cartList[foundIndex].quantity > 1) {
                    const cartItem = state.cartList[foundIndex];
                    cartItem.quantity = cartItem.quantity - 1;
                    state.cartList[foundIndex] = cartItem;
                } else {
                    const newList = state.cartList.filter((item) => item.id !== action.payload);
                    state.cartList = newList;
                }
            }
            state.subTotal = state.subTotal - action.payload.price;
        },
        removeFromCart: (state, action) => {
            const newList = state.cartList.filter((item) => item.id !== action.payload.id);
            state.cartList = newList;
            state.subTotal = state.subTotal - action.payload.price;
        },
    },
});

export default cart;
