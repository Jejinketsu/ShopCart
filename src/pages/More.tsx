import React from "react";
import MoreTemplate from "../components/templates/More";
import { PageProps } from "../routes/interfaces";
import { useAppDispatch } from "../hooks/redux";
import { authActions } from "../redux/slices/auth";

const More = ({ navigation }: PageProps) => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigation.navigate("Login");
    };

    return (
        <MoreTemplate
            Cards={[
                {
                    title: "Sair do app",
                    onPress: handleLogout,
                    leftIcon: "sign-out-alt",
                },
            ]}
        />
    );
};

export default More;
