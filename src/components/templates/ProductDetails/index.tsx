import { View, Text, FlatList } from "react-native";
import React from "react";
import {
    Container,
    ContentCard,
    ContentRow,
    OpaqueText,
    StatusText,
    Subtitle,
    Title,
} from "./styles";
import { ProductDetailsProps } from "./interfaces";
import { STATUS, translateStatus } from "../../../consts/status";

const ProductDetails = ({ product }: ProductDetailsProps) => {
    return (
        <Container>
            <ContentCard>
                <Title>{product?.name || "default"}</Title>
            </ContentCard>

            <ContentCard></ContentCard>
        </Container>
    );
};

export default ProductDetails;
