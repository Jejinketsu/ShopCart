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
    products,
    DoneButtonProps,
    AddButtonProps,
    PlusButtonProps,
    ProductInputProps,
    PriceInputProps,
    QuantityInputProps,
    ModalProps,
    ModalRef,
    purchaseSelected,
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
                            <Text color="PRIMARY_1">R$ {purchaseSelected.budget}</Text>
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
                        keyExtractor={(item: any, index) => item.name + index}
                        renderItem={({ item }) => (
                            <CardList
                                title={item.name}
                                subtitle={`R$ ${item.price}`}
                                badge={item.status}
                            />
                        )}
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
                        <InputText {...PriceInputProps} keyboardType='numeric' />
                        <InputText {...QuantityInputProps} keyboardType='numeric' />
                    </InputContainer>
                    <AddButton {...AddButtonProps} />
                </ModalContainer>
            </ModalSlider>
        </>
    );
};

export default PurchaseTrackingTemplate;
