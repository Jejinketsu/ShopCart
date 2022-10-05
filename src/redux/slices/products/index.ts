import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { TABLE_TYPE } from "../../../database/sqlite";
import { ProductsState } from "./interface";

const initialState: ProductsState = {
    isFullfilled: false,
    productList: [],
    productSelected: {},
};

export const productsSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(createProducts.fulfilled, (state, action) => {
            state.productList = action.payload;
        });
        builder.addCase(createProducts.rejected, (_, action) => {
            console.error(action.error);
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productList = action.payload;
            state.isFullfilled = true;
        });
        builder.addCase(fetchProducts.rejected, (_, action) => {
            console.error(action.error);
        });
    },
});

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    const products = await localDatabase.select("Products");
    return products;
});

export const createProducts = createAsyncThunk(
    "products/create",
    async (products: TABLE_TYPE<"Products">[]) => {
        const result = await localDatabase.createMany("Products", products);
        return result;
    }
);

export const productActions = {
    ...productsSlice.actions,
    fetchProducts,
    createProducts,
};

export default productsSlice.reducer;
