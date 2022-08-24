import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../atoms/Button";
import InputText from "../../atoms/inputText";
import Text from "../../atoms/Text";
import LogoIcon from '../../../Assets/icons/Logo.png';
import { ButtonContainer, Container, FormContainer, TextField, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { IFormInput, LoginProps } from "./interface";

function Login() {
    const navigation = useNavigation<LoginProps>()
    const { control, handleSubmit } = useForm<IFormInput>({});

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        console.log("data", data);
        navigation.navigate('Root');
    };
    
    function handleRegister() {
        navigation.navigate('Register');
    };

    return (
        <Container>
            <Logo source={LogoIcon} />

            <FormContainer
                style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
            >
                <Text typeScale="h4">Informe seu dados</Text>

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
                        marginTop: 20,
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
                        label="ENTRAR"
                        color="ACCENTED_0"
                        onPress={handleSubmit(onSubmit)}
                    />
                </ButtonContainer>

                <ButtonContainer style={{ borderColor: "#003A6D" }}>
                    <Button
                        label="CADASTRE-SE"
                        color="SECONDARY_0"
                        onPress={handleRegister}
                    />
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
}

export default Login;
