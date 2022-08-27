import React from "react";
import { LoginProps } from "./interfaces";
import LogoIcon from "../../../Assets/icons/Logo.png";
import {
    ButtonContainer,
    Container,
    FormContainer,
    Logo,
    TextField,
} from "./styles";
import Text from "../../atoms/Text";
import InputText from "../../atoms/inputText";
import Button from "../../atoms/Button";

const LoginTemplate = ({
    title,
    EmailInputProps,
    PasswordInputProps,
    LoginButtonProps,
    RegisterButtonProps,
}: LoginProps) => {
    return (
        <Container>
            <Logo source={LogoIcon} />

            <FormContainer>
                <Text typeScale="h4">{title || "default"}</Text>

                <TextField>
                    <InputText {...EmailInputProps} />
                </TextField>

                <TextField>
                    <InputText {...PasswordInputProps} />
                </TextField>

                <ButtonContainer>
                    <Button {...LoginButtonProps} />
                </ButtonContainer>

                <ButtonContainer>
                    <Button {...RegisterButtonProps} />
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
};

export default LoginTemplate;
