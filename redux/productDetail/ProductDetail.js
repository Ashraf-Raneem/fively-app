import { createSlice } from "@reduxjs/toolkit";

const productDetail = createSlice({
    name: "productDetail",
    initialState: {
        product: {},
    },
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
    },
});

export default productDetail;
