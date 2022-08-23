import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

import { DB, TABLE_TYPE } from "../../../database/sqlite";

import { PurchaseState } from "./interfaces";
import localDatabase from "../../../database/orm";
import { join } from "@prisma/client/runtime";

const initialState: PurchaseState = {
    isFullfilled: false,
    purchaseList: [],
};

export const purchaseSlice = createSlice({
    name: "purchase",
    initialState,
    reducers: {
        addPurchase: (state, action: PayloadAction<DB["Purchases"]>) => {
            state.purchaseList.push(action.payload);
        },
        removePurchase: (state, action: PayloadAction<number>) => {
            state.purchaseList = state.purchaseList.filter(
                (item) => item.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPurchases.fulfilled, (state, action) => {
            state.purchaseList = action.payload;
            state.isFullfilled = true;
        });
        builder.addCase(fetchPurchases.rejected, (_, action) => {
            console.error(action.error);
        });
        builder.addCase(createPurchase.fulfilled, (state, action) => {
            state.purchaseList.push(action.payload);
        });
        builder.addCase(createPurchase.rejected, (_, action) => {
            console.error(action.error);
        });
    },
});

export const fetchPurchases = createAsyncThunk(
    "purchases/fulfilled",
    async () => {
        const purchases = await localDatabase.select("Purchases", null);
        console.log("purchases", purchases);
        return purchases;
    }
);

export const createPurchase = createAsyncThunk(
    "purchases/create",
    async (purchase: TABLE_TYPE<"Purchases">) => {
        const result = await localDatabase.create("Purchases", purchase);
        return result;
    }
);

export const actions = purchaseSlice.actions;

export const selectPurchase = (state: RootState) => state.purchase;

export default purchaseSlice.reducer;
