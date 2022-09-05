import { IButtonProps } from "../../atoms/Button/interface";
import { IInputTextProps } from "../../atoms/inputText/interface";

export interface LoginProps {
    title: string;
    NameInputProps?: IInputTextProps;
    EmailInputProps: IInputTextProps;
    PasswordInputProps: IInputTextProps;
    LoginButtonProps: IButtonProps;
    RegisterButtonProps?: IButtonProps;
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
