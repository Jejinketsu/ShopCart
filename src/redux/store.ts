import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import counterReducer from "./slices/counter";
import purchaseReducer from "./slices/purchase";

const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
        purchase: purchaseReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
