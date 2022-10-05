import { TABLE_TYPE } from "../../../database/sqlite";

type detailProduct = TABLE_TYPE<"Products"> & {
    transactions: TABLE_TYPE<"Transactions">[];
};

export interface productDetailState {
    isFulfilled: boolean;
    product: detailProduct;
}
