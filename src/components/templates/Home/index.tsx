import React, { useState } from "react";
import { FlatList } from "react-native";
import {
    BigCurrencyTitle,
    Container,
    ContentCard,
    Line,
    NavigationButton,
    NavigationButtonBox,
    NavigationText,
    OpaqueText,
    TouchVisibility,
} from "./styles";
import { StatusBar } from "expo-status-bar";
import ItemCard from "../../molecules/ItemCard";
import { IHomeProps } from "./interfaces";

const mockData = [
    { value: 25.5, title: "Compra da Feira", date: "11/12", time: "13:32" },
    { value: 344, title: "Churrasco", date: "09/12", time: "13:32" },
    { value: 7999, title: "PC Gamer", date: "09/12", time: "13:32" },
    { value: 149, title: "Supermercado", date: "08/12", time: "13:32" },
    { value: 25.5, title: "Compra da Feira", date: "11/12", time: "13:32" },
    { value: 344, title: "Churrasco", date: "09/12", time: "13:32" },
    { value: 7999, title: "PC Gamer", date: "09/12", time: "13:32" },
    { value: 149, title: "Supermercado", date: "05/12", time: "13:32" },
    { value: 25.5, title: "Compra da Feira", date: "11/12", time: "13:32" },
    { value: 344, title: "Churrasco", date: "09/12", time: "13:32" },
    { value: 7999, title: "PC Gamer", date: "09/12", time: "13:32" },
    { value: 149, title: "Supermercado", date: "05/12", time: "13:32" },
];

const HomeTemplate = ({ NavigationButtonsProp }: IHomeProps) => {
    const [isVisible, setIsVisible] = useState(true);
    return (
        <Container>
            <StatusBar style="light" />
            <ContentCard>
                <BigCurrencyTitle isVisible={isVisible}>
                    R$ 12.000,00
                </BigCurrencyTitle>
                <TouchVisibility
                    onPress={() => setIsVisible((state) => !state)}
                    isVisible={isVisible}
                />
            </ContentCard>
            <ContentCard>
                {NavigationButtonsProp.map(({ iconName, onPress, title }) => (
                    <NavigationButtonBox key={title}>
                        <NavigationButton
                            iconName={iconName}
                            onPress={onPress}
                        />
                        <NavigationText>{title}</NavigationText>
                    </NavigationButtonBox>
                ))}
            </ContentCard>
            <OpaqueText>Atividades Recentes</OpaqueText>
            <ContentCard>
                <FlatList
                    data={mockData}
                    renderItem={({ item, index }) => (
                        <ItemCard key={index + item.title} {...item} />
                    )}
                    ItemSeparatorComponent={() => <Line />}
                />
            </ContentCard>
        </Container>
    );
};

export default HomeTemplate;