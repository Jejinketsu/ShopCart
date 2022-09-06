import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import LoginTemplate from "../components/templates/Login";
import { IFormInput } from "../components/templates/Login/interfaces";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { PageProps } from "../routes/interfaces";
import { authActions } from "../redux/slices/auth";
const Login = ({ navigation }: PageProps) => {
    const { control, handleSubmit } = useForm<IFormInput>({});
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user) {
            navigation.navigate("Root");
        }
    }, [user]);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        dispatch(authActions.login(data));
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
                secureTextEntry: true,
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
