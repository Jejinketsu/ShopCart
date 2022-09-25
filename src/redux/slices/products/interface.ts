import { DB, TABLE_TYPE } from "../../../database/sqlite";

export interface ProductsState {
    isFullfilled: boolean;
    productsList: DB["Products"][];
    productSelected: TABLE_TYPE<'Products'>;
}