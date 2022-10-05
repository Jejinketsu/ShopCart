import React, { useEffect } from "react";
import ProductDetailsTemplate from "../components/templates/ProductDetails";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { productDetailActions } from "../redux/slices/productDetail";
import { PageProps } from "../routes/interfaces";

const ProductDetails = ({ route }: PageProps) => {
    const routeProduct = route?.params?.product;

    const { isFulfilled, product } = useAppSelector(
        (state) => state.productDetail
    );
    const dispatch = useAppDispatch();

    console.log("product", product);

    useEffect(() => {
        if (!isFulfilled) {
            dispatch(
                productDetailActions.fetchProductTransactions(routeProduct)
            );
        }
    }, [isFulfilled]);

    useEffect(() => {
        return () => {
            dispatch(productDetailActions.reset());
        };
    }, []);

    return <ProductDetailsTemplate product={product} />;
};

export default ProductDetails;
