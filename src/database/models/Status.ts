import { Model } from "@nozbe/watermelondb";

export default class Status extends Model {
    static table = "Status";
    static associations = {
        purchases: { type: "has_many", key: "purchase_id" },
    };
}
