import React, { useEffect } from "react";
import PurchaseDetailsTemplate from "../components/templates/PurchaseDetails";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { purchaseDetailActions } from "../redux/slices/purchaseDetail";
import { FullProduct } from "../redux/slices/purchaseDetail/interfaces";
import { PageProps } from "../routes/interfaces";

const PurchaseDetails = ({ route, navigation }: PageProps) => {
    const purchase = route?.params?.purchase;

    const { isFullfilled, products } = useAppSelector(
        (state) => state.purchaseDetail
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isFullfilled) {
            dispatch(purchaseDetailActions.loadPurchaseDetail(purchase.id));
            dispatch(purchaseDetailActions.setFullfilled());
        }
    }, [isFullfilled]);

    useEffect(() => {
        return () => {
            dispatch(purchaseDetailActions.reset());
        };
    }, []);

    const handleItemClick = (item: FullProduct) => {
        navigation.navigate("ProductDetails", { product: item });
    };

    return (
        <PurchaseDetailsTemplate
            purchase={purchase}
            products={products}
            cardOnPress={handleItemClick}
        />
    );
};

export default PurchaseDetails;
