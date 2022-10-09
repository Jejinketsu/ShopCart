import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

import { DB, TABLE_TYPE } from "../../../database/sqlite";

import { finishPurchaseDTO, PurchaseState } from "./interfaces";
import localDatabase from "../../../database/orm";
import store from "../../store";

const initialState: PurchaseState = {
    isFullfilled: false,
    purchaseList: [],
    purchaseSelected: {},
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
            state.purchaseSelected = action.payload;
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

export const finishPurchase = createAsyncThunk(
    "purchases/finish",
    async ({ products, purchaseId, released_Budget }: finishPurchaseDTO) => {
        for (const product of products) {
            const [productAlreadyExists] = await localDatabase.select(
                "Products",
                {
                    name: product.name,
                }
            );

            let result: TABLE_TYPE<"Products"> | undefined = undefined;
            if (!productAlreadyExists) {
                result = await localDatabase.create("Products", {
                    name: product.name,
                    market: "Mercado",
                    tag: "tags",
                    unityId: 1,
                });
            }

            await localDatabase.create("Transactions", {
                productId: result ? result.id : productAlreadyExists.id,
                purchaseId,
                quantity: product.quantity,
                price: product.price,
                userId: 1,
            });
            
            await localDatabase.update(
                "Purchases",
                { released_Budget: released_Budget },
                { id: purchaseId }
            );
        }
    }
);

export const purchaseActions = {
    ...purchaseSlice.actions,
    fetchPurchases,
    createPurchase,
    finishPurchase,
};

export const selectPurchase = (state: RootState) => state.purchase;

export default purchaseSlice.reducer;
