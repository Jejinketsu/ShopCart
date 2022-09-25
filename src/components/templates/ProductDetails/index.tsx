import React from "react";
import { FlatList } from "react-native";
import ItemCard from "../../molecules/ItemCard";
import { ProductDetailsProps } from "./interfaces";
import {
    Container,
    ContentCard,
    GrathContainer,
    Line,
    OpaqueText,
    Title,
} from "./styles";

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

const ProductDetails = ({ product }: ProductDetailsProps) => {
    return (
        <Container>
            <ContentCard>
                <Title>{product?.name || "default"}</Title>
            </ContentCard>

            <ContentCard>
                <GrathContainer />
                <OpaqueText>Últimas vezes que esse produto foi comprado</OpaqueText>
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

export default ProductDetails;
