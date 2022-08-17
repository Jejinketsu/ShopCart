import React from "react";
import InputText from "../../atoms/inputText";
import CardList from "../../molecules/CardList";
import { Container, ContentList } from "./styles";
import { PageProps } from './interface';

const CreatedListsTemplate = ({ navigation }: PageProps) => {
    return (
        <Container>
            <InputText placeholder="Buscar" iconName="search" />

            <ContentList showsVerticalScrollIndicator={false}>
                <CardList title="Compras da feira" price="25,50" navigate='ListDetails' />
                <CardList title="Supermercado" price="95,50" navigate='ListDetails' />
                <CardList title="Pizza da domingo" price="52,50" navigate='ListDetails' />
                <CardList title="PC novo" price="3500,50" navigate='ListDetails' />
            </ContentList>
        </Container>
    );
};

export default CreatedListsTemplate;
