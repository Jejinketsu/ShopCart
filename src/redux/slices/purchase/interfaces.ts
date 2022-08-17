import { DB } from "../../../database/sqlite";

export interface PurchaseState {
    isFullfilled: boolean;
    purchaseList: DB["Purchases"][];
}
