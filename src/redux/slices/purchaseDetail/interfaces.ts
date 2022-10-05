import { TABLE_TYPE } from "../../../database/sqlite";

export type FullProduct = TABLE_TYPE<"Products"> & {
    transactions: TABLE_TYPE<"Transactions">[];
};

export interface PurchaseDetailState {
    isFullfilled: boolean;
    purchase: TABLE_TYPE<"Purchases">;
    products: FullProduct[];
}
