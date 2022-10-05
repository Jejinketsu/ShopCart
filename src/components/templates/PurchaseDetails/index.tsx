import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList } from "react-native";
import { STATUS, translateStatus } from "../../../consts/status";
import { useAppSelector } from "../../../hooks/redux";
import CardList from "../../molecules/CardList";
import { PurchaseDetailsProps } from "./interfaces";
import {
    Container,
    ContentCard,
    ContentRow,
    OpaqueText,
    StatusText,
    Subtitle,
    Title,
} from "./styles";

const PurchaseDetails = ({
    purchase,
    products,
    cardOnPress,
}: PurchaseDetailsProps) => {
    const { productsList } = useAppSelector((state) => state.products);
    const navigation = useNavigation();
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
                data={products}
                renderItem={({ item }) => (
                    <CardList
                        title={item.name}
                        subtitle={item.transactions[0].price}
                        onPress={() => cardOnPress(item)}
                    />
                )}
            />
        </Container>
    );
};

export default PurchaseDetails;
