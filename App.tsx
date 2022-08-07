import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Sqlite from "./src/database/sqlite";
import store from "./src/redux/store";
import Routes from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/global/styles/theme";

export default function App() {
    useEffect(() => {
        const loadSqlite = async () => {
            const sqlite = new Sqlite();
            await sqlite.loadDatabase();
        };
        loadSqlite();
    }, []);

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </Provider>
    );
}
