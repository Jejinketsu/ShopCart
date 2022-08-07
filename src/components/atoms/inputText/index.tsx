import React from "react";
import { View } from "react-native";
import { IInputTextProps } from "./interface";
import { Container, InputComponent } from "./styles";
import Text from "../Text";

const InputText = ({ title, ...rest }: IInputTextProps) => {
    return (
        <Container>
            {title && <Text color="PRIMARY_1">{title}</Text>}
            <InputComponent {...rest} />
        </Container>
    );
};

export default InputText;
