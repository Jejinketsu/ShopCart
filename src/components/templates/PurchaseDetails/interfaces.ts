import { TABLE_TYPE } from "../../../database/sqlite";

export interface PurchaseDetailsProps {
    purchase: TABLE_TYPE<"Purchases"> | null;
}
