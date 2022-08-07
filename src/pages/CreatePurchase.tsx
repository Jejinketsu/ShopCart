import { View, Text } from "react-native";
import React from "react";
import CreatePurchaseTemplate from "../components/templates/CreatePurchase";
import { PageProps } from "../routes/interfaces";

const CreatePurchase = ({ navigation }: PageProps) => {
    return (
        <CreatePurchaseTemplate
            CreateButtonProps={{
                onPress: () => navigation.navigate("PurchaseTracking"),
            }}
        />
    );
};

export default CreatePurchase;
