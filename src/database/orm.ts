import SqliteClient, { TABLES, TABLE_TYPE, DB } from "./sqlite";

type Where = {
    [key: string]: {
        value: any;
        operator: "=" | "!=" | ">" | "<" | ">=" | "<=";
    };
};

type Join<T extends TABLES, J extends TABLES> = {
    table: J;
    fields: {
        thisTable: keyof TABLE_TYPE<T>;
        joinTable: keyof TABLE_TYPE<J>;
    };
};

class LocalDatabase {
    static instance: LocalDatabase;

    constructor() {
        if (!LocalDatabase.instance) {
            LocalDatabase.instance = this;
        }
    }

    client: SqliteClient = new SqliteClient();

    async create<T extends TABLES>(
        table: T,
        entry: TABLE_TYPE<T>
    ): Promise<DB[T]> {
        const sql = `INSERT INTO ${table} (${Object.keys(entry).join(",")}) 
            VALUES (${Object.keys(entry).map(() => "?")})`;
        await this.client.execSql(sql, Object.values(entry));
        const lastInserted = await this.client.execSql(
            "SELECT last_insert_rowid()"
        );
        const lastId: number =
            lastInserted.rows._array[0]["last_insert_rowid()"];
        const [result] = await this.select(table, { id: lastId });
        return result;
    }

    async createMany<T extends TABLES>(
        table: T,
        entrys: TABLE_TYPE<T>[]
    ): Promise<DB[T][]> {
        const tables = Object.keys(entrys[0]).join(",");
        const sql = `INSERT INTO ${table} (${tables}) VALUES ${entrys
            .map(
                (entry) =>
                    `(${Object.values(entry)
                        .map((value) => this.isString(value))
                        .join(",")})`
            )
            .join(",")}`;
        console.log("create sql", sql);
        const result = await this.client.execSql(sql, []);
        return result.rows._array as unknown as DB[T][];
    }

    async update<T extends TABLES>(
        table: T,
        entry: TABLE_TYPE<T>,
        where: TABLE_TYPE<T>
    ): Promise<DB[T][]> {
        const sql = `UPDATE ${table} SET ${Object.keys(entry)
            .map((key) => `${key} = ?`)
            .join(",")} WHERE ${this.formatWhere(where)}`;
        const result = await this.client.execSql(sql, Object.values(entry));
        return result.rows._array as unknown as DB[T][];
    }

    async delete<T extends TABLES>(
        table: T,
        where: TABLE_TYPE<T>
    ): Promise<DB[T][]> {
        const sql = `DELETE FROM ${table} WHERE ${this.formatWhere(where)}`;
        const result = await this.client.execSql(sql);
        return result.rows._array as unknown as DB[T][];
    }

    async select<T extends TABLES, J extends TABLES>(
        table: T,
        where: TABLE_TYPE<T> | null = null,
        joins: Join<T, J>[] | null = null
    ): Promise<DB[T][]> {
        const sql = `SELECT * FROM ${table} `;
        const joinSql = joins
            ? joins.map((join) => this.formatJoin(table, join)).join(" ")
            : "";
        const whereSql = where ? ` WHERE ${this.formatWhere(where)}` : "";
        const result = await this.client.execSql(sql + joinSql + whereSql);
        return result.rows._array as unknown as DB[T][];
    }

    formatWhere(where: object) {
        return Object.entries(where)
            .map(([key, value]) => `${key} = ${this.isString(value)}`)
            .join(" AND ");
    }

    formatJoin<T extends TABLES, J extends TABLES>(table: T, join: Join<T, J>) {
        return `INNER JOIN ${join.table} ON ${[
            join?.table,
            join.fields.joinTable,
        ].join(".")} = ${[table, join.fields.thisTable].join(".")}`;
    }

    isString(value: any): string {
        return typeof value === "string" ? `'${value}'` : value;
    }
}

const localDatabase = Object.freeze(new LocalDatabase());

export default localDatabase;
