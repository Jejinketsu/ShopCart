import { appSchema, tableSchema } from "@nozbe/watermelondb";

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: "Users",
            columns: [
                { name: "name", type: "string" },
                { name: "email", type: "string" },
                { name: "password", type: "string" },
                { name: "created_at", type: "number" },
                { name: "updated_at", type: "number" },
            ],
        }),
        tableSchema({
            name: "Products",
            columns: [
                { name: "name", type: "string" },
                { name: "tag", type: "string", isOptional: true },
                { name: "unity_id", type: "number" },
                { name: "created_at", type: "number" },
                { name: "updated_at", type: "number" },
            ],
        }),
        tableSchema({
            name: "Unitys",
            columns: [{ name: "name", type: "string" }],
        }),
        tableSchema({
            name: "Purchases",
            columns: [
                { name: "name", type: "string" },
                { name: "budget", type: "number" },
                { name: "released_budget", type: "number", isOptional: true },
                { name: "user_id", type: "number", isIndexed: true },
                { name: "status_id", type: "number" },
                { name: "created_at", type: "number" },
                { name: "updated_at", type: "number" },
            ],
        }),
        tableSchema({
            name: "Status",
            columns: [{ name: "name", type: "string" }],
        }),
        tableSchema({
            name: "Transactions",
            columns: [
                { name: "user_id", type: "number", isIndexed: true },
                { name: "product_id", type: "number", isIndexed: true },
                { name: "purchase_id", type: "number", isIndexed: true },
                { name: "price", type: "number" },
                { name: "quantity", type: "number" },
                { name: "created_at", type: "number" },
                { name: "local", type: "string", isOptional: true },
                { name: "market", type: "string", isOptional: true },
            ],
        }),
    ],
});
