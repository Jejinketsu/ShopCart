import React from "react";
import { FlatList } from "react-native-gesture-handler";
import InputText from "../../atoms/inputText";
import ProgressBar from "../../atoms/ProgressBar";
import Text from "../../atoms/Text";
import CardList from "../../molecules/CardList";
import ModalSlider from "../../organisms/ModalSlider";
import { IPurchaseTracking } from "./interfaces";
import {
    AddButton,
    ButtonWrapper,
    Container,
    ContentCard,
    ControlCotainer,
    DoneButton,
    EmptyListContainer,
    EmptyListText,
    InputContainer,
    ItensContainer,
    ModalContainer,
    OpaqueText,
    PlusButton,
    SpendProgressBox,
    SpendProgressContainer,
    SpendProgressText,
} from "./styles";

const PurchaseTrackingTemplate = ({
    products = [],
    DoneButtonProps,
    AddButtonProps,
    PlusButtonProps,
    ProductInputProps,
    PriceInputProps,
    QuantityInputProps,
    ModalProps,
    ModalRef,
}: IPurchaseTracking) => {
    return (
        <>
            <Container>
                <ContentCard>
                    <OpaqueText>Limite do Orçamento: 70%</OpaqueText>
                    <ProgressBar progress={70} />
                    <SpendProgressContainer>
                        <SpendProgressBox>
                            <OpaqueText>Estimado:</OpaqueText>
                            <Text color="PRIMARY_1">R$ 100,00</Text>
                        </SpendProgressBox>
                        <Text>{">>"}</Text>
                        <SpendProgressBox>
                            <OpaqueText>Gastos:</OpaqueText>
                            <SpendProgressText status={100 - 50}>
                                R$ 50,00
                            </SpendProgressText>
                        </SpendProgressBox>
                    </SpendProgressContainer>
                </ContentCard>

                <ItensContainer>
                    <FlatList
                        data={products}
                        keyExtractor={(item, index) => item.name + index}
                        renderItem={({ item }) => <CardList {...item} />}
                        ListEmptyComponent={() => (
                            <EmptyListContainer>
                                <EmptyListText>
                                    Nenhum item adicionado ainda
                                </EmptyListText>
                            </EmptyListContainer>
                        )}
                    />
                </ItensContainer>

                <ControlCotainer>
                    <ButtonWrapper>
                        <DoneButton {...DoneButtonProps} />
                    </ButtonWrapper>
                    <PlusButton {...PlusButtonProps} />
                </ControlCotainer>
            </Container>
            <ModalSlider ref={ModalRef} {...ModalProps}>
                <ModalContainer>
                    <InputText {...ProductInputProps} />
                    <InputContainer>
                        <InputText {...PriceInputProps} />
                        <InputText {...QuantityInputProps} />
                    </InputContainer>
                    <AddButton {...AddButtonProps} />
                </ModalContainer>
            </ModalSlider>
        </>
    );
};

export default PurchaseTrackingTemplate;
