import { View, Text } from "react-native";
import React from "react";
import { Card, Container } from "./styles";
import { StatusBar } from "expo-status-bar";

const MoreTemplate = () => {
    return (
        <Container>
            <StatusBar />
            <Card title="hello" leftIcon="sign-out-alt" />
        </Container>
    );
};

export default MoreTemplate;
