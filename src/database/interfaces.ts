export interface Users {
    id?: number;
    name: string;
    email: string;
    password: string;
}

export interface Products {
    id?: number;
    name: string;
    tag?: string;
    unityId: number;
    quantity?: number;
    market?: string;
}

export interface Unity {
    id?: number;
    name: string;
}

export interface Purchases {
    id?: number;
    name: string;
    budget: number;
    released_Budget?: number;
    userId: number;
    statusId: number;
    created_At: Date;
    finished_At?: Date;
}

export interface Transactions {
    id?: number;
    userId: number;
    productId: number;
    purchaseId: number;
    price: number;
    quantity: number;
    timeStamp: Date;
    local?: string;
}
