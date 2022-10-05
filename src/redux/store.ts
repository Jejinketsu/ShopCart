import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import globalReducer from "./slices/global";
import counterReducer from "./slices/counter";
import purchaseReducer from "./slices/purchase";
import purchaseDetailReducer from "./slices/purchaseDetail";
import productsReducer from "./slices/products";
import productDetail from "./slices/productDetail";

const store = configureStore({
    reducer: {
        auth: authReducer,
        global: globalReducer,
        counter: counterReducer,
        purchase: purchaseReducer,
        purchaseDetail: purchaseDetailReducer,
        products: productsReducer,
        productDetail: productDetail,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
