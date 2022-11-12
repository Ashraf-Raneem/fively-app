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
        decreaseFromCart: (state, action) => {
            const foundIndex = state.cartList.findIndex((item) => item.id === action.payload.id);
            if (foundIndex !== -1) {
                if (state.cartList[foundIndex].quantity > 1) {
                    state.cartList[foundIndex].quantity--;
                } else {
                    const newList = state.cartList.filter((item) => item.id !== action.payload.id);
                    state.cartList = newList;
                }
            }
        },
        removeFromCart: (state, action) => {
            const newList = state.cartList.filter((item) => item.id !== action.payload.id);
            state.cartList = newList;
        },
        getTotal: (state, action) => {
            const totalItems = state.cartList;

            const sum = 0;
            totalItems.forEach((item) => {
                if (item.discountedPrice) {
                    sum = sum + item.discountedPrice;
                } else {
                    sum = sum + item.price;
                }
            });
            return sum;
        },
    },
});

export default cart;
