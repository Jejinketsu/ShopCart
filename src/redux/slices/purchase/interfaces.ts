import { DB, TABLE_TYPE } from "../../../database/sqlite";

export interface PurchaseState {
    isFullfilled: boolean;
    purchaseList: DB["Purchases"][];
    purchaseSelected: TABLE_TYPE<"Purchases">;
}

export interface finishPurchaseDTO {
    products: {
        name: string;
        price: number;
        quantity: number;
    }[];
    purchaseId: number;
}
