import { DB, TABLE_TYPE } from "../../../database/sqlite";

export interface ProductsState {
    isFullfilled: boolean;
    productList: TABLE_TYPE<"Products">[];
    productSelected: TABLE_TYPE<"Products">;
}
