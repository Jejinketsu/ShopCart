import React, { useEffect } from "react";

import HomeTemplate from "../components/templates/Home";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { homeActions } from "../redux/slices/home";
import { PageProps } from "../routes/interfaces";

const Home = ({ navigation }: PageProps) => {
    const { lastPurchases } = useAppSelector((state) => state.home);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(homeActions.fetchLastPurchases());
    }, []);

    return (
        <HomeTemplate
            lastPurchase={lastPurchases}
            NavigationButtonsProp={[
                {
                    iconName: "shopping-basket",
                    onPress: () => navigation.navigate("CreatePurchase"),
                    title: "Nova Compra",
                },
                {
                    iconName: "list",
                    onPress: () => navigation.navigate("Purchases"),
                    title: "Listas",
                },
                {
                    iconName: "clock",
                    onPress: () => {},
                    title: "His. de Preços",
                },
                {
                    iconName: "chart-line",
                    onPress: () => {},
                    title: "Gastos",
                },
            ]}
        />
    );
};

export default Home;
