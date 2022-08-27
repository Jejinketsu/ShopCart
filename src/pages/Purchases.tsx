import React, { useEffect } from "react";
import CreatedListsTemplate from "../components/templates/CreatedLists";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { PageProps } from "../routes/interfaces";

import { fetchPurchases } from "../redux/slices/purchase";
import { useForm } from "react-hook-form";
import { STATUS, translateStatus } from "../consts/status";

const Purchases = ({ navigation }: PageProps) => {
    const { control, handleSubmit } = useForm();
    const { isFullfilled, purchaseList } = useAppSelector(
        (state) => state.purchase
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isFullfilled) {
            dispatch(fetchPurchases());
        }
    }, [isFullfilled]);

    return (
        <CreatedListsTemplate
            InputSearchProps={{
                name: "search",
                control,
                title: "Pesquisar",
                iconName: "search",
            }}
            CardListProps={purchaseList.map((purchase) => ({
                title: purchase.name,
                subtitle: purchase.budget,
                onPress: () =>
                    navigation.navigate("PurchaseDetails", {
                        purchase: purchase,
                    }),
                badge: translateStatus(purchase.statusId as STATUS),
            }))}
        />
    );
};

export default Purchases;
