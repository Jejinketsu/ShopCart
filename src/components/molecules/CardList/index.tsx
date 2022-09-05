import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import ButtonIcon from "../../atoms/ButtonIcon";
import { CardListProps } from "./interfaces";
import {
    ItemCard,
    Icon,
    ContentInfo,
    StatusText,
    OpaqueText,
    TitleText,
} from "./styles";

const CardList = ({
    title,
    subtitle,
    badge,
    leftIcon,
    rightIcon,
}: CardListProps) => {
    return (
        <ItemCard>
            <Icon>
                <FontAwesome5
                    name={leftIcon || "shopping-basket"}
                    size={30}
                    color="#85878B"
                />
            </Icon>

            <ContentInfo>
                <TitleText>{title}</TitleText>
                {subtitle && (
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <OpaqueText>{subtitle}</OpaqueText>
                        <StatusText color="SUCCESS">{badge}</StatusText>
                    </View>
                )}
            </ContentInfo>

            <ButtonIcon
                iconName={rightIcon || "edit"}
                color="PRIMARY_1"
                onPress={() => {}}
                size={24}
            />
        </ItemCard>
    );
};

export default CardList;
