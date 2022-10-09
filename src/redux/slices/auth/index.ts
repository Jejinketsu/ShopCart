import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import localDatabase from "../../../database/orm";
import { DB } from "../../../database/sqlite";
import { IAuthState } from "./interfaces";

import * as AuthSession from "expo-auth-session";

interface AuthResponse {
    type: string;
    params: {
        access_token: string;
    };
}

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
        builder.addCase(loginWithGoogle.fulfilled, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(loginWithGoogle.rejected, (_, action) => {
            console.error(action.error);
        });
    },
});

const loginWithGoogle = createAsyncThunk("auth/loginWithGoogle", async () => {
    const CLIENT_ID =
        "1024343412766-2a9c63eqtlqfalsk6tjtm9b9chkf0vg5.apps.googleusercontent.com";
    const REDIRECT_URI = "https://auth.expo.io/@jejinketsu/shopcart";
    const RESPONSE_TYPE = "token";
    const SCOPE = encodeURI("profile email");

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const { params, type } = (await AuthSession.startAsync({
        authUrl,
    })) as AuthResponse;

    if (type === "success") {
        const response = await fetch(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();
        return {
            id: userInfo.id,
            name: userInfo.given_name,
            email: userInfo.email,
        };
    }
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

export const authActions = {
    ...authSlice.actions,
    createAccount,
    login,
    loginWithGoogle,
};

export default authSlice.reducer;
