import React from "react";
import { IInputTextProps } from "./interface";
import { Container, InputComponent, InputContainer } from "./styles";
import Text from "../Text";
import { Feather } from "@expo/vector-icons";
import { useController } from "react-hook-form";

const InputText = ({
    name,
    control,
    title,
    iconName,
    ...rest
}: IInputTextProps) => {
    const { field } = useController({
        control,
        defaultValue: "",
        name,
    });
    return (
        <Container>
            {title && <Text color="PRIMARY_1">{title}</Text>}
            <InputContainer>
                {iconName && (
                    <Feather name={iconName} size={18} color="#85878B" />
                )}
                <InputComponent
                    {...rest}
                    inputRef={field.ref}
                    value={field.value}
                    onChangeText={field.onChange}
                />
            </InputContainer>
        </Container>
    );
};

export default InputText;
