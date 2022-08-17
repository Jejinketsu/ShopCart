import { Model } from "@nozbe/watermelondb";
import { text, date, relation, field } from "@nozbe/watermelondb/decorators";

export default class Transactions extends Model {
    static table = "Transactions";
    static associations = {
        users: { type: "belongs_to", key: "user_id" },
        purchases: { type: "belongs_to", key: "purchase_id" },
        products: { type: "belongs_to", key: "product_id" },
    };

    @field("price") price;
    @field("quantity") quantity;
    @text("local") local;
    @text("market") market;
    @date("created_at") created_at;
    @relation("users", "user_id") users;
    @relation("purchases", "purchase_id") purchases;
    @relation("products", "product_id") products;
}
