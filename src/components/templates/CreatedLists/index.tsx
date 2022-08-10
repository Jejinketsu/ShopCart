import React from "react";
import InputText from "../../atoms/inputText";
import CardList from "../../molecules/CardList";
import { Container, ContentList } from "./styles";

const CreatedListsTemplate = () => {
    return (
        <Container>
            <InputText placeholder="Buscar" iconName="search" />

            <ContentList showsVerticalScrollIndicator={false}>
                <CardList title="Compras da feira" price="25,50" />
                <CardList title="Supermercado" price="95,50" />
                <CardList title="Pizza da domingo" price="52,50" />
                <CardList title="PC novo" price="3500,50" />
            </ContentList>
        </Container>
    );
};

export default CreatedListsTemplate;
