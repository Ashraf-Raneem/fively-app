import { createSlice } from "@reduxjs/toolkit";
import { addressList } from "../../data/addressList";

const address = createSlice({
    name: "address",
    initialState: {
        selected: addressList[0],
        addressList: addressList,
    },
    reducers: {
        setAddress: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export default address;
