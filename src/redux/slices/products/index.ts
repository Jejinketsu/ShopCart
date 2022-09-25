import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { DB, TABLE_TYPE } from "../../../database/sqlite";
import { RootState } from "../../store";
import { ProductsState } from "./interface";

const initialState: ProductsState = {
    isFullfilled: false,
    productsList: [],
    productSelected: {},
};

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addPurchase: (state, action: PayloadAction<DB["Products"]>) => {
            state.productsList.push(action.payload);
        },
        removePurchase: (state, action: PayloadAction<number>) => {
            state.productsList = state.productsList.filter(
                (item) => item.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productsList = action.payload;
            state.isFullfilled = true;
        });
        builder.addCase(fetchProducts.rejected, (_, action) => {
            console.error(action.error);
        });
        builder.addCase(createProducts.fulfilled, (state, action) => {
            state.productsList.push(action.payload);
            state.productSelected = action.payload;
        });
        builder.addCase(createProducts.rejected, (_, action) => {
            console.error(action.error);
        });
    },
});


export const createProducts = createAsyncThunk(
    "products/create",
    async (products: TABLE_TYPE<"Products">) => {
        const result = await localDatabase.create("Products", products);
        return result;
    }
);

export const fetchProducts = createAsyncThunk(
    "products/fulfilled",
    async () => {
        const products = await localDatabase.select("Products", null);
        console.log("Products", products);
        return products;
    }
);

export const actions = productSlice.actions;

export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;