import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { DB } from "../../../database/sqlite";

import { IAuthState } from "./interfaces";

const initialState: IAuthState = {
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<DB["Users"]>) => {
            state.user = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(createAccount.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(createAccount.rejected, (_, action) => {
            console.error(action.error);
        });
    },
});

const createAccount = createAsyncThunk(
    "auth/createAccount",
    async (user: DB["Users"]) => {
        const result = await localDatabase.create("Users", user);
        return result;
    }
);

export const authActions = { ...authSlice.actions, createAccount };

export default authSlice.reducer;
