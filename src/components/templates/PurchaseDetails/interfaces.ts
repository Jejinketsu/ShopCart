import { TABLE_TYPE } from "../../../database/sqlite";

type FullProduct = TABLE_TYPE<"Products"> & {
    transactions: TABLE_TYPE<"Transactions">[];
};
export interface PurchaseDetailsProps {
    purchase: TABLE_TYPE<"Purchases"> | null;
    products: FullProduct[];
    cardOnPress: (product: FullProduct) => void;
}
