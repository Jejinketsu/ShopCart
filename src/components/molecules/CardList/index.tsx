import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ButtonIcon from "../../atoms/ButtonIcon";
import {
    ContentInfo,
    Icon,
    ItemCard,
    OpaqueText,
    StatusText,
    TitleText,
} from "./styles";

type Props = {
    title: string;
    price: string;
    navigate: string;
};

const CardList = ({ title, price, navigate }: Props) => {
    const navigation = useNavigation();
    return (
        <ItemCard>
            <Icon>
                <FontAwesome5
                    name="shopping-basket"
                    size={30}
                    color="#85878B"
                />
            </Icon>

            <ContentInfo>
                <TitleText>{title}</TitleText>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <OpaqueText>R$ {price}</OpaqueText>
                    <StatusText color="SUCCESS">Em Progresso</StatusText>
                </View>
            </ContentInfo>

            <ButtonIcon
                iconName="edit"
                color="PRIMARY_1"
                onPress={() => navigation.navigate(navigate)}
                size={24}
            />
        </ItemCard>
    );
};

export default CardList;
