import { createSlice } from "@reduxjs/toolkit";
import { addressList } from "../../data/addressList";

const addressSlice = createSlice({
    name: "address",
    initialState: {
        selected: addressList[0],
        edited: null,
        addressList: addressList,
    },
    reducers: {
        setEdit: (state, action) => {
            state.edited = action.payload;
        },
        setAddress: (state, action) => {
            state.selected = action.payload;
        },
        addAddress: (state, action) => {
            state.addressList = [...state.addressList, action.payload];
        },
        updateAddress: (state, action) => {
            const addresses = [...state.addressList];
            const id = action.payload.id;
            const addressToBeUpdated = addresses.findIndex((item) => item.id === id);
            if (addressToBeUpdated !== -1) {
                addresses[addressToBeUpdated] = action.payload;
                state.addressList = [...addresses];
            }
        },
    },
});

export default addressSlice;
