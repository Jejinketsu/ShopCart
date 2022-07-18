import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";

class SqliteClient {
    async loadDatabase() {
        const dbFolder = await FileSystem.getInfoAsync(
            `${FileSystem.documentDirectory}SQLite`
        );
        const resultDb = await FileSystem.getInfoAsync(
            `${FileSystem.documentDirectory}SQLite/shopcart.db`
        );

        if (!resultDb.exists) {
            if (!dbFolder.exists) {
                await FileSystem.makeDirectoryAsync(
                    `${FileSystem.documentDirectory}SQLite`
                );
            }
            await FileSystem.downloadAsync(
                Asset.fromModule(require("./shopcart.db")).uri,
                `${FileSystem.documentDirectory}SQLite/shopcart.db`
            );
        }
    }

    async connect() {
        await this.loadDatabase();
        this.conn = SQLite.openDatabase("shopcart.db");
    }
}

export default SqliteClient;
