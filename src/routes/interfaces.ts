import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TABLE_TYPE } from "../database/sqlite";

export type RootStackParamList = {
    Root?: undefined;
    Home?: undefined;
    Login?: undefined;
    Register?: undefined;
    Profile?: undefined;
    Backup?: undefined;
    More?: undefined;
    CreatePurchase?: undefined;
    CreatedLists?: undefined;
    Purchases?: undefined;
    PurchaseDetails?: { purchase: TABLE_TYPE<"Purchases"> | null };
    ProductDetails?: { product: TABLE_TYPE<"Products"> | null };
    PurchaseTracking?: undefined;
    ListDetails?: undefined;
};

export type PageProps = NativeStackScreenProps<
    RootStackParamList,
    keyof RootStackParamList
>;

export type AuthenticationStackProps = {
    Login: undefined;
    Register: undefined;
    Root: undefined;
};
