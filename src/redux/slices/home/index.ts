import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { homeState } from "./interfaces";

const initialState: homeState = {
    lastPurchases: [],
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLastPurchases.fulfilled, (state, action) => {
            state.lastPurchases = action.payload;
        });
    },
});

const fetchLastPurchases = createAsyncThunk(
    "fetch/purchases",
    async function () {
        const purchases = await localDatabase.select("Purchases");
        return purchases;
    }
);

export const homeActions = { ...homeSlice.actions, fetchLastPurchases };

export default homeSlice.reducer;
