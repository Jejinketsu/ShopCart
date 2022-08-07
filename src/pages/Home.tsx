import React from "react";

import HomeTemplate from "../components/templates/Home";

const Home = ({ navigation }) => {
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
                    onPress: () => {},
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
