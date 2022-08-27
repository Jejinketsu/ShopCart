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
import { PurchaseDetailsProps } from "./interfaces";
import { STATUS, translateStatus } from "../../../consts/status";
import CardList from "../../molecules/CardList";

const mock = [
    { title: "Produto 1", subtitle: "Tipo a" },
    { title: "Produto 2", subtitle: "Tipo b" },
    { title: "Produto 3", subtitle: "Tipo c" },
    { title: "Produto 4", subtitle: "Tipo d" },
    { title: "Produto 5", subtitle: "Tipo e" },
    { title: "Produto 6", subtitle: "Tipo f" },
];

const PurchaseDetails = ({ purchase }: PurchaseDetailsProps) => {
    return (
        <Container>
            <ContentCard>
                <Title>{purchase?.name || "default"}</Title>

                <ContentRow>
                    <Subtitle>
                        Budget: R$ {purchase?.budget || "R$ 0,00"}
                    </Subtitle>
                    <Subtitle>
                        Released: {purchase?.released_Budget || "R$0,00"}
                    </Subtitle>
                </ContentRow>
                <StatusText>
                    {translateStatus(purchase?.statusId as STATUS)}
                </StatusText>
            </ContentCard>
            <OpaqueText>Produtos</OpaqueText>

            <FlatList
                data={mock}
                renderItem={({ item }) => (
                    <CardList
                        title={item.title}
                        subtitle={item.subtitle}
                        onPress={() => {}}
                    />
                )}
            />
        </Container>
    );
};

export default PurchaseDetails;
