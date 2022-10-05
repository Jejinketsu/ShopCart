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

import { format, parseISO } from "date-fns";

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
                <OpaqueText>
                    Últimas vezes que esse produto foi comprado
                </OpaqueText>
                <FlatList
                    data={product.transactions}
                    renderItem={({ item, index }) => {
                        const timestamp = parseISO(item.timeStamp);
                        const date = format(timestamp, "dd/MM");
                        const time = format(timestamp, "HH:mm");

                        return (
                            <ItemCard
                                key={index + item.title}
                                title={"Compra random"}
                                value={item.price}
                                date={date}
                                time={time}
                            />
                        );
                    }}
                    ItemSeparatorComponent={() => <Line />}
                />
            </ContentCard>
        </Container>
    );
};

export default ProductDetails;
