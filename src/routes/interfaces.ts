import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home?: undefined;
    Profile?: undefined;
    Backup?: undefined;
    More?: undefined;
    CreatePurchase?: undefined;
    Purchases?: undefined;
    PurchaseTracking?: undefined;
};

export type PageProps = NativeStackScreenProps<
    RootStackParamList,
    keyof RootStackParamList
>;
