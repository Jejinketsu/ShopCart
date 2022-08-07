import React from "react";
import { ButtonContainer, Container, ContentCard } from "./styles";
import InputText from "../../atoms/inputText";
import Button from "../../atoms/Button";

const CreatePurchaseTemplate = () => {
    return (
        <Container>
            <ContentCard>
                <InputText title="Nova Compra:" />
                <InputText keyboardType="numeric" title="Orçamento:" />
                <ButtonContainer>
                    <Button
                        onPress={() => {}}
                        label="ADICIONAR PRODUTOS"
                        color="ACCENTED_0"
                    />
                </ButtonContainer>
            </ContentCard>
        </Container>
    );
};

export default CreatePurchaseTemplate;
