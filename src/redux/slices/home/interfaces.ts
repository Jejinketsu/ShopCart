import { TABLE_TYPE } from "../../../database/sqlite";

export interface homeState {
    lastPurchases: TABLE_TYPE<"Purchases">[];
}
