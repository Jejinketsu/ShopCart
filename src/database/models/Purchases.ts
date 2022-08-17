import { Model } from "@nozbe/watermelondb";

export default class Purchases extends Model {
    static table = "Purchases";
    static associations = {
        users: { type: "belongs_to", key: "user_id" },
        transactions: { type: "has_many", key: "purchase_id" },
    };
}
