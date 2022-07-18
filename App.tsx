import React, { useEffect } from "react";
import { Provider } from "react-redux";
import Sqlite from "./src/database/sqlite";
import Home from "./src/pages/Home";
import store from "./src/redux/store";

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
            <Home />
        </Provider>
    );
}
