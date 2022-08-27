import { TABLE_TYPE } from "../../../database/sqlite";

export interface ProductDetailsProps {
    product: TABLE_TYPE<"Products"> | null;
}
