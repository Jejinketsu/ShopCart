import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { GlobalState } from "./interface";

const initialState: GlobalState = {
    theme: "light",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<"light" | "dark">) => {
            state.theme = action.payload;
        },
        toogleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export const globalActions = globalSlice.actions;

export const selectGlobal = (state: RootState) => state.global.theme;

export default globalSlice.reducer;
