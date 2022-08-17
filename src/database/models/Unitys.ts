import { Model } from "@nozbe/watermelondb";
import { text, relation } from "@nozbe/watermelondb/decorators";

export default class Unitys extends Model {
    static table = "Unitys";
    static associations = {
        products: { type: "has_many", key: "unity_id" },
    };

    @text("name") name;
    @relation("products", "unity_id") products;
}
