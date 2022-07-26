import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Sqlite from "./src/database/sqlite";
import store from "./src/redux/store";
import Routes from "./src/routes";

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
            <Routes />
        </Provider>
    );
}
