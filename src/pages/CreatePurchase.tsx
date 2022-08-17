import { View, Text } from "react-native";
import React from "react";
import CreatePurchaseTemplate from "../components/templates/CreatePurchase";
import { PageProps } from "../routes/interfaces";

import { useAppDispatch } from "../hooks/redux";
import { createPurchase } from "../redux/slices/purchase";

import { useForm, SubmitHandler } from "react-hook-form";
import localDatabase from "../database/orm";

type IFormInput = {
    name: string;
    budget: string;
};

const CreatePurchase = ({ navigation }: PageProps) => {
    const { control, handleSubmit, register } = useForm<IFormInput>();
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log("data", data);
        const newPurchase = {
            name: data.name,
            budget: Number(data.budget),
            userId: 1,
            statusId: 1,
        };
        dispatch(createPurchase(newPurchase));
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
        />
    );
};

export default CreatePurchase;
