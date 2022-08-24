import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../atoms/Button";
import InputText from "../../atoms/inputText";
import Text from "../../atoms/Text";
import LogoIcon from '../../../Assets/icons/Logo.png';
import { ButtonContainer, Container, FormContainer, TextField, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IFormRegister, LoginProps } from "./interface";

function Register() {
    const navigation = useNavigation<LoginProps>()
    const { control, handleSubmit } = useForm<IFormRegister>({});

    const onSubmit: SubmitHandler<IFormRegister> = async (data) => {
        console.log("data", data);
        navigation.navigate('Login');
    };

    return (
        <Container>
            <Logo source={LogoIcon} />

            <FormContainer
                style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            >
                <Text typeScale="h4">Preencha seus dados</Text>

                <TextField
                    style={{ borderColor: "#2293F7", borderBottomWidth: 2 }}
                >
                    <InputText
                        name='name'
                        control={control}
                        placeholder="Nome"
                        iconName="user"
                    />
                </TextField>

                <TextField
                    style={{ borderColor: "#2293F7", borderBottomWidth: 2 }}
                >
                    <InputText
                        name="email"
                        control={control}
                        placeholder="E-mail"
                        iconName="mail"
                    />
                </TextField>

                <TextField
                    style={{
                        borderColor: "#2293F7",
                        borderBottomWidth: 2,
                    }}
                >
                    <InputText
                        name="password"
                        control={control}
                        placeholder="Senha"
                        iconName="lock"
                    />
                </TextField>

                <ButtonContainer style={{ borderColor: "#E5E7EA" }}>
                    <Button
                        label="CADASTRAR"
                        color="ACCENTED_0"
                        onPress={handleSubmit(onSubmit)}
                    />
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
}

export default Register;
