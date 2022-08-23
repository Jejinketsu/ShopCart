import React, { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { ButtonBox, Container, Content, Description, Title } from "./styles";
import { IModalPopUpProps, IModalPopUpRefProps } from "./interfaces";
import Button from "../../atoms/Button";
import { ButtonContainer } from "./styles";

const ModalPopUp = forwardRef(
    (
        {
            title,
            description,
            ConfirmButtonProps,
            CancelButtonProps,
        }: IModalPopUpProps,
        ref: Ref<IModalPopUpRefProps>
    ) => {
        const [isOpen, setIsOpen] = useState(false);

        const openModal = () => {
            setIsOpen(true);
        };

        const closeModal = () => {
            setIsOpen(false);
        };

        useImperativeHandle(ref, () => ({
            isOpen,
            open: openModal,
            close: closeModal,
        }));

        if (!isOpen) return null;
        return (
            <Container onPress={closeModal}>
                <Content>
                    <Title>{title}</Title>
                    {description && <Description>{description}</Description>}
                    <ButtonContainer>
                        {CancelButtonProps && (
                            <ButtonBox
                                isHalved={
                                    CancelButtonProps && ConfirmButtonProps
                                }
                            >
                                <Button {...CancelButtonProps} />
                            </ButtonBox>
                        )}
                        {ConfirmButtonProps && (
                            <ButtonBox
                                isHalved={
                                    CancelButtonProps && ConfirmButtonProps
                                }
                            >
                                <Button {...ConfirmButtonProps} />
                            </ButtonBox>
                        )}
                    </ButtonContainer>
                </Content>
            </Container>
        );
    }
);

export default ModalPopUp;
