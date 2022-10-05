import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormRegister } from "../components/templates/Authentication/interface";
import LoginTemplate from "../components/templates/Login";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authActions } from "../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { PageProps } from "../routes/interfaces";

const Register = ({ navigation }: PageProps) => {
    const formSchema = yup.object().shape({
        name: yup.string().required("nome obrigatório"),
        email: yup
            .string()
            .email("Insira um e-mail válido")
            .required("e-mail obrigatório"),
        password: yup
            .string()
            .required("senha obrigatória")
            .min(5, "no mínimo 5 caracteres"),
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormRegister>({
        resolver: yupResolver(formSchema),
    });
    const { user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<IFormRegister> = (data: IFormRegister) => {
        console.log("data", data);
        dispatch(authActions.createAccount(data));
    };

    useEffect(() => {
        if (user) {
            reset();
            navigation.navigate("StackHome");
        }
    }, [user]);

    return (
        <LoginTemplate
            title="Cadastro"
            NameInputProps={{
                name: "name",
                control,
                placeholder: "Nome",
                iconName: "user",
                overline: true,
                error: errors.name?.message,
            }}
            EmailInputProps={{
                name: "email",
                control,
                iconName: "mail",
                placeholder: "E-mail",
                overline: true,
                error: errors.email?.message,
            }}
            PasswordInputProps={{
                name: "password",
                control,
                iconName: "lock",
                placeholder: "Senha",
                secureTextEntry: true,
                overline: true,
                error: errors.password?.message,
            }}
            LoginButtonProps={{
                label: "Cadastrar",
                onPress: handleSubmit(onSubmit),
            }}
        />
    );
};

export default Register;
