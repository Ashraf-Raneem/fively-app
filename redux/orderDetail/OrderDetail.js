import { createSlice } from "@reduxjs/toolkit";

const ordetDetail = createSlice({
    name: "orderDetail",
    initialState: {
        orderInfo: {},
    },
    reducers: {
        setOrderDetail: (state, action) => {
            state.orderInfo = action.payload;
            console.log(state.orderInfo);
        },
    },
});
export default ordetDetail;
