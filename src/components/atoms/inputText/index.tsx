import React from "react";
import { IInputTextProps } from "./interface";
import { Container, InputComponent } from "./styles";
import Text from "../Text";
import { Feather } from '@expo/vector-icons';

const InputText = ({ title, iconName, ...rest }: IInputTextProps) => {
    return (
        <Container>
            {iconName && <Feather name={iconName} size={18} color='#85878B' />}
            {title && <Text color="PRIMARY_1">{title}</Text>}
            <InputComponent {...rest} />
        </Container>
    );
};

export default InputText;
