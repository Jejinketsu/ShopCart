import React from "react";

import HomeTemplate from "../components/templates/Home";
import { PageProps } from "../routes/interfaces";

const Home = ({ navigation }: PageProps) => {
    return (
        <HomeTemplate
            NavigationButtonsProp={[
                {
                    iconName: "shopping-basket",
                    onPress: () => navigation.navigate("CreatePurchase"),
                    title: "Nova Compra",
                },
                {
                    iconName: "list",
                    onPress: () => navigation.navigate("CreatedLists"),
                    title: "Listas",
                },
                {
                    iconName: "clock",
                    onPress: () => {},
                    title: "Histórico",
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
