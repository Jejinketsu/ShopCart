import React from "react";
import InputText from "../../atoms/inputText";
import { Container, ContentList } from "./styles";

const ListDetailsTemplate = () => {
    return (
        <Container>
            <InputText placeholder="Buscar" iconName="search" />

            <ContentList showsVerticalScrollIndicator={false}>
              
            </ContentList>
        </Container>
    );
};

export default ListDetailsTemplate;
