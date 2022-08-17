import React from "react";
import { ButtonContainer, Container, ContentCard } from "./styles";
import InputText from "../../atoms/inputText";
import Button from "../../atoms/Button";
import { PageProps } from "../../../routes/interfaces";
import { ICreatePurchaseProps } from "./interfaces";

const CreatePurchaseTemplate = ({
    CreateButtonProps,
}: ICreatePurchaseProps) => {
    return (
        <Container>
            <ContentCard>
                <InputText title="Nova Compra:" />
                <InputText keyboardType="numeric" title="Orçamento:" />
                <ButtonContainer>
                    <Button
                        label="ADICIONAR PRODUTOS"
                        color="ACCENTED_0"
                        {...CreateButtonProps}
                    />
                </ButtonContainer>
            </ContentCard>
        </Container>
    );
};

export default CreatePurchaseTemplate;
