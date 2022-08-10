import React from "react";
import { IInputTextProps } from "./interface";
import { Container, InputComponent, InputContainer } from "./styles";
import Text from "../Text";
import { Feather } from "@expo/vector-icons";

const InputText = ({ title, iconName, ...rest }: IInputTextProps) => {
    return (
        <Container>
            {title && <Text color="PRIMARY_1">{title}</Text>}
            <InputContainer>
                {iconName && (
                    <Feather name={iconName} size={18} color="#85878B" />
                )}
                <InputComponent {...rest} />
            </InputContainer>
        </Container>
    );
};

export default InputText;
