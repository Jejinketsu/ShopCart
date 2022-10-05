import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { TABLE_TYPE } from "../../../database/sqlite";
import { productDetailState } from "./interfaces";

const initialState: productDetailState = {
    isFulfilled: false,
    product: {
        transactions: [],
    },
};

const productDetailSlice = createSlice({
    name: "ProductDetail",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductTransactions.fulfilled, (state, action) => {
            state.product = action.payload;
            state.isFulfilled = true;
        });
    },
});

const fetchProductTransactions = createAsyncThunk(
    "fetch/productTransactions",
    async function (product: TABLE_TYPE<"Products">) {
        const transactions = await localDatabase.select("Transactions", {
            productId: product.id,
        });
        return {
            ...product,
            transactions,
        };
    }
);

export const productDetailActions = {
    ...productDetailSlice.actions,
    fetchProductTransactions,
};

export default productDetailSlice.reducer;
