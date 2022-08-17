import React, { useRef } from "react";
import { ModalRefInterface } from "../components/organisms/ModalSlider/interfaces";
import PurchaseTrackingTemplate from "../components/templates/PurchaseTracking";

const mockProducts = [
    {
        name: "Pão de alho",
        price: "R$ 5,00",
        status: "SUCCESS",
    },
    {
        name: "Pão de alho",
        price: "R$ 5,00",
        status: "SUCCESS",
    },
    {
        name: "Pão de alho",
        price: "R$ 5,00",
        status: "SUCCESS",
    },
    {
        name: "Pão de alho",
        price: "R$ 5,00",
        status: "SUCCESS",
    },
    {
        name: "Pão de alho",
        price: "R$ 5,00",
        status: "SUCCESS",
    },
    {
        name: "Pão de alho",
        price: "R$ 5,00",
        status: "SUCCESS",
    },
];

const PurchaseTracking = () => {
    const modalRef = useRef<ModalRefInterface>(null);

    return (
        <PurchaseTrackingTemplate
            ModalRef={modalRef}
            ModalProps={{ title: "Novo item", modalHeight: 70 }}
            products={mockProducts}
            DoneButtonProps={{ label: "Finalizar", onPress: () => {} }}
            AddButtonProps={{ label: "Adicionar a Lista", onPress: () => {} }}
            PlusButtonProps={{
                iconName: "plus",
                color: "LIGHT",
                bgColor: "ACCENTED_0",
                onPress: () => modalRef?.current?.open(),
            }}
        />
    );
};

export default PurchaseTracking;
