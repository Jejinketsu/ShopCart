import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthenticationStackProps } from "../../../routes/interfaces";

export interface IFormInput {
    email: string;
    password: string;
}

export type LoginProps = NativeStackNavigationProp<AuthenticationStackProps, 'Login'>;  