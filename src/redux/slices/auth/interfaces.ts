import { DB } from "../../../database/sqlite";

export interface IAuthState {
    user?: DB["Users"];
}
