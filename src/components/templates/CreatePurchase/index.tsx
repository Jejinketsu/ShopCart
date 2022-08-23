import React from "react";
import { ButtonContainer, Container, ContentCard } from "./styles";
import InputText from "../../atoms/inputText";
import Button from "../../atoms/Button";
import { ICreatePurchaseProps } from "./interfaces";
import ModalPopUp from "../../organisms/ModalPopUp";

const CreatePurchaseTemplate = ({
    InputTitleProps,
    InputBudgetProps,
    CreateButtonProps,
    ModalPopUpProps,
}: ICreatePurchaseProps) => {
    return (
        <>
            <Container>
                <ContentCard>
                    <InputText {...InputTitleProps} />
                    <InputText {...InputBudgetProps} />
                    <ButtonContainer>
                        <Button
                            label="ADICIONAR PRODUTOS"
                            color="ACCENTED_0"
                            {...CreateButtonProps}
                        />
                    </ButtonContainer>
                </ContentCard>
            </Container>
            <ModalPopUp {...ModalPopUpProps.props} ref={ModalPopUpProps.ref} />
        </>
    );
};

export default CreatePurchaseTemplate;
