import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../../routes/interfaces';

export type PageProps = NativeStackScreenProps<
    RootStackParamList,
    keyof RootStackParamList
>;
