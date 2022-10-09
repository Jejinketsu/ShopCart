import { IButtonProps } from "../../atoms/Button/interface";
import { IInputTextProps } from "../../atoms/inputText/interface";
import { SearchInterface } from "../../atoms/Search/interfaces";

export interface LoginProps {
    title: string;
    NameInputProps?: IInputTextProps;
    EmailInputProps: IInputTextProps;
    PasswordInputProps: IInputTextProps;
    LoginButtonProps: IButtonProps;
    RegisterButtonProps?: IButtonProps;
    /*     GoogleSignInButtonProps: {
        onPress: () => void;
        disabled: boolean;
    }; */
}

export interface IFormInput {
    email: string;
    password: string;
}

export interface IFormRegister {
    name: string;
    email: string;
    password: string;
}
