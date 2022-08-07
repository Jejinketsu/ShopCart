import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import ButtonIcon from "../../atoms/ButtonIcon";
import InputText from "../../atoms/inputText";
import {
    Container,
    ContentInfo,
    ContentList,
    Icon,
    ItemCard,
    OpaqueText,
    StatusText,
    TitleText,
} from "./styles";

const CreatedListsTemplate = () => {
    return (
        <Container>
            <InputText placeholder="Buscar" iconName="search" />

            <ContentList showsVerticalScrollIndicator={false}>
                <ItemCard>
                    <Icon>
                        <FontAwesome5
                            name="shopping-basket"
                            size={30}
                            color="#85878B"
                        />
                    </Icon>

                    <ContentInfo>
                        <TitleText>Compras da feira</TitleText>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <OpaqueText>R$ 25,50</OpaqueText>
                            <StatusText color='SUCCESS'>Em Progresso</StatusText>
                        </View>
                    </ContentInfo>

                    <ButtonIcon iconName="edit" color="PRIMARY_1" onPress={() => {}} size={24} />
                </ItemCard>
            </ContentList>
        </Container>
    );
};

export default CreatedListsTemplate;
