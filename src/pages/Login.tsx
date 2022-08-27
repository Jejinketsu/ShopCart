import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginTemplate from "../components/templates/Login";
import { IFormInput } from "../components/templates/Login/interfaces";
import { PageProps } from "../routes/interfaces";

const Login = ({ navigation }: PageProps) => {
    const { control, handleSubmit } = useForm<IFormInput>({});

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log("data", data);
        navigation.navigate("Root");
    };

    function handleRegister() {
        navigation.navigate("Register");
    }

    return (
        <LoginTemplate
            title="Login"
            EmailInputProps={{
                name: "email",
                control: control,
                placeholder: "E-mail",
                iconName: "mail",
            }}
            PasswordInputProps={{
                name: "password",
                control: control,
                placeholder: "Senha",
                iconName: "lock",
            }}
            LoginButtonProps={{
                label: "Entrar",
                onPress: handleSubmit(onSubmit),
                color: "ACCENTED_0",
            }}
            RegisterButtonProps={{
                label: "Cadastre-se",
                onPress: handleRegister,
                color: "ACCENTED_1",
                type: "outline",
            }}
        />
    );
};

export default Login;
