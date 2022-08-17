import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";
import * as FileSystem from "expo-file-system";
import * as PrismaClient from "@prisma/client";

export type DB = {
    Products: PrismaClient.Products;
    Purchases: PrismaClient.Purchases;
    Users: PrismaClient.Users;
    Transactions: PrismaClient.Transactions;
    Unity: PrismaClient.Unity;
    Status: PrismaClient.Status;
};

export type TABLES = keyof DB;

export type TABLE_TYPE<T extends TABLES> = {
    [P in keyof DB[T]]?: DB[T][P];
};
class SqliteClient {
    conn: SQLite.Database | null = null;

    constructor() {
        this.connect();
    }

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

    getTransaction(): Promise<SQLite.SQLTransaction> {
        return new Promise((resolve, reject) => {
            this.conn?.transaction(
                (tx) => resolve(tx),
                (err) => reject(err)
            );
        });
    }

    async execQuery(
        tx: SQLite.SQLTransaction,
        query: string,
        args?: any[]
    ): Promise<SQLite.SQLResultSet | SQLite.SQLError> {
        return new Promise((resolve, reject) => {
            tx.executeSql(
                query,
                args,
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                    return true;
                }
            );
        });
    }

    async execSql(query: string, args?: any[]): Promise<SQLite.SQLResultSet> {
        try {
            if (!this.conn) await this.connect();
            const tx = await this.getTransaction();
            const result = await this.execQuery(tx, query, args);

            if ("message" in result) throw result;

            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default SqliteClient;
