import { View, Text } from "react-native";
import React from "react";
import { Card, Container } from "./styles";
import { StatusBar } from "expo-status-bar";
import { MoreProps } from "./interfaces";

const MoreTemplate = ({ Cards }: MoreProps) => {
    return (
        <Container>
            <StatusBar />
            {Cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </Container>
    );
};

export default MoreTemplate;
