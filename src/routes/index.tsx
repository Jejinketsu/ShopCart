import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthenticationRoutes from "./Authentication.routes";
import RootRoutes from "./root.routes";
import { ThemeProvider } from "styled-components/native";
import { getTheme } from "../global/styles/theme";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { asyncStorage } from "../database/asyncStorage";
import { globalActions } from "../redux/slices/global";

export default function Routes() {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.global.theme);

    useEffect(() => {
        const getThemeFromStorage = async () => {
            const theme = await asyncStorage.getData("theme");
            if (theme) {
                dispatch(globalActions.setTheme(theme));
            }
        };
        getThemeFromStorage();
    }, []);

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <NavigationContainer>
                {true ? <AuthenticationRoutes /> : <RootRoutes />}
            </NavigationContainer>
        </ThemeProvider>
    );
}
