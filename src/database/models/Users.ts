import { Model } from "@nozbe/watermelondb";
import { text, date, relation } from "@nozbe/watermelondb/decorators";

export default class Users extends Model {
    static table = "Users";
    static associations = {
        purchases: { type: "has_many", key: "user_id" },
        transactions: { type: "has_many", key: "user_id" },
    };

    @text("name") name;
    @text("email") email;
    @text("password") password;
    @date("created_at") created_at;
    @date("updated_at") updated_at;
    @relation("transactions", "user_id") transactions;
    @relation("purchases", "user_id") purchases;
}
