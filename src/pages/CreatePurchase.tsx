import { View, Text } from "react-native";
import React, { useRef } from "react";
import CreatePurchaseTemplate from "../components/templates/CreatePurchase";
import { PageProps } from "../routes/interfaces";

import { useAppDispatch } from "../hooks/redux";
import { createPurchase } from "../redux/slices/purchase";

import { useForm, SubmitHandler } from "react-hook-form";
import localDatabase from "../database/orm";
import { STATUS } from "../consts/status";
import { IModalPopUpRefProps } from "../components/organisms/ModalPopUp/interfaces";

type IFormInput = {
    name: string;
    budget: string;
};

const CreatePurchase = ({ navigation }: PageProps) => {
    const { control, handleSubmit } = useForm<IFormInput>();
    const modalRef = useRef<IModalPopUpRefProps>(null);
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log("data", data);
        /* const newPurchase = {
            name: data.name,
            budget: Number(data.budget),
            userId: 1,
            statusId: STATUS.CREATED,
        };
        dispatch(createPurchase(newPurchase)); */
        modalRef?.current?.open();
        //navigation.navigate("PurchaseTracking")
    };

    return (
        <CreatePurchaseTemplate
            InputTitleProps={{
                name: "name",
                control,
                title: "Nova Compra",
            }}
            InputBudgetProps={{
                name: "budget",
                control,
                title: "Orçamento",
            }}
            CreateButtonProps={{
                onPress: handleSubmit(onSubmit),
            }}
            ModalPopUpProps={{
                ref: modalRef,
                props: {
                    title: "Compra criada com sucesso!",
                    description: "Deseja iniciar o acompanhamento da compra?",
                    ConfirmButtonProps: {
                        label: "Sim",
                        onPress: () => navigation.replace("PurchaseTracking"),
                        color: "ACCENTED_0",
                    },
                    CancelButtonProps: {
                        label: "Não",
                        onPress: () => navigation.pop(),
                        color: "ACCENTED_0",
                        type: "outline",
                    },
                },
            }}
        />
    );
};

export default CreatePurchase;
