import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { PurchaseDetailState } from "./interfaces";

const initialState: PurchaseDetailState = {
    isFullfilled: false,
    purchase: {},
    products: [],
};

export const purchaseDetailSlice = createSlice({
    name: "purchaseDetail",
    initialState,
    reducers: {
        setFullfilled: (state) => {
            state.isFullfilled = true;
        },
        reset() {
            return { ...initialState };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadPurchaseDetail.fulfilled, (state, action) => {
            state.purchase = action.payload.purchase;
            state.products = action.payload.products;
            state.isFullfilled = true;
        });
        builder.addCase(loadPurchaseDetail.rejected, (_, action) => {
            console.error(action.error);
        });
    },
});

const loadPurchaseDetail = createAsyncThunk(
    "purchaseDetail/load",
    async (purchaseId: number) => {
        const [purchase] = await localDatabase.select("Purchases", {
            id: purchaseId,
        });
        const transactions = await localDatabase.select("Transactions", {
            purchaseId: purchase.id,
        });
        console.log("transactions:", transactions);
        const products = await localDatabase.select("Products", {
            id: transactions.map((item) => item.productId),
        });

        const productsWithTransactions = products.map((product) => {
            const productTransactions = transactions.filter(
                (transaction) => transaction.productId === product.id
            );
            return {
                ...product,
                transactions: productTransactions,
            };
        });

        return { purchase, products: productsWithTransactions };
    }
);

export const purchaseDetailActions = {
    ...purchaseDetailSlice.actions,
    loadPurchaseDetail,
};

export default purchaseDetailSlice.reducer;
