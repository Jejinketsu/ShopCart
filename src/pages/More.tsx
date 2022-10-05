import React, { useEffect } from "react";
import MoreTemplate from "../components/templates/More";
import { PageProps } from "../routes/interfaces";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { authActions } from "../redux/slices/auth";
import { globalActions } from "../redux/slices/global";
import { asyncStorage } from "../database/asyncStorage";

const More = ({ navigation }: PageProps) => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.global.theme);

    useEffect(() => {
        asyncStorage.setData("theme", theme);
    }, [theme]);

    const handleThemeChange = () => {
        dispatch(globalActions.toogleTheme());
    };

    const handleLogout = () => {
        dispatch(authActions.logout());
        navigation.navigate("Login");
    };

    return (
        <MoreTemplate
            Cards={[
                {
                    title: "Alternar Tema",
                    leftIcon: "lightbulb",
                    onPress: () => handleThemeChange(),
                },
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
