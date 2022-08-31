import { createAsyncThunk } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { TABLE_TYPE } from "../../../database/sqlite";


export const createProducts = createAsyncThunk(
    "products/create",
    async (products: TABLE_TYPE<"Products">) => {
        const result = await localDatabase.create("Products", products);
        return result;
    }
);