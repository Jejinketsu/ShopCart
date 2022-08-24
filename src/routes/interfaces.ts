import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Home?: undefined;
    Profile?: undefined;
    Backup?: undefined;
    More?: undefined;
    CreatePurchase?: undefined;
    CreatedLists?: undefined;
    Purchases?: undefined;
    PurchaseTracking?: undefined;
    ListDetails?: undefined;
};

export type PageProps = NativeStackScreenProps<
    RootStackParamList,
    keyof RootStackParamList
>;

export type AuthenticationStackProps = {
    Login: undefined,
    Register: undefined,
    Root: undefined;
};
