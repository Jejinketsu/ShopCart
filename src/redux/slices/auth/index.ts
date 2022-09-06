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
        logout: (state) => {
            state.user = undefined;
        },
    },
    extraReducers(builder) {
        builder.addCase(createAccount.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(createAccount.rejected, (_, action) => {
            console.error(action.error);
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (_, action) => {
            console.error(action.error);
        });
    },
});

const login = createAsyncThunk(
    "auth/login",
    async (payload: { email: string; password: string }) => {
        console.log("login");
        const [user] = await localDatabase.select("Users", {
            email: payload.email,
            password: payload.password,
        });
        if (!user) throw new Error("User not found");
        return user;
    }
);

const createAccount = createAsyncThunk(
    "auth/createAccount",
    async (user: DB["Users"]) => {
        const result = await localDatabase.create("Users", user);
        return result;
    }
);

export const authActions = { ...authSlice.actions, createAccount, login };

export default authSlice.reducer;
