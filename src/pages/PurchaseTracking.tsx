import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
    const { control, handleSubmit } = useForm();
    const modalRef = useRef<ModalRefInterface>(null);

    const onSubmit: SubmitHandler<any> = async (data) => {
        console.log("data", data);
    };

    return (
        <PurchaseTrackingTemplate
            ModalRef={modalRef}
            ModalProps={{ title: "Novo item", modalHeight: 70 }}
            products={mockProducts}
            ProductInputProps={{ name: "product", title: "Produto", control }}
            PriceInputProps={{ name: "price", title: "Preço", control }}
            QuantityInputProps={{
                name: "quantity",
                title: "Quantidade",
                control,
            }}
            DoneButtonProps={{ label: "Finalizar", onPress: () => {} }}
            AddButtonProps={{
                label: "Adicionar a Lista",
                onPress: handleSubmit(onSubmit),
            }}
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
