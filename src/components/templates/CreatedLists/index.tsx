import React from "react";
import InputText from "../../atoms/inputText";
import CardList from '../../molecules/CardList';
import {
    Container,
    ContentList,
} from "./styles";

const CreatedListsTemplate = () => {
    return (
        <Container>
            <InputText placeholder="Buscar" iconName="search" />

            <ContentList showsVerticalScrollIndicator={false}>
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </ContentList>
        </Container>
    );
};

export default CreatedListsTemplate;
