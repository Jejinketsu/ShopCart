import { Model } from "@nozbe/watermelondb";

export default class Products extends Model {
    static table = "Products";
    static associations = {
        transactions: { type: "has_many", key: "product_id" },
        unitys: { type: "belongs_to", key: "unity_id" },
    };
}
