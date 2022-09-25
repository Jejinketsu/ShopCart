import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import counterReducer from "./slices/counter";
import purchaseReducer from "./slices/purchase";
import productsReducer from "./slices/products"

const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
        purchase: purchaseReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
