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
    error,
    ...rest
}: IInputTextProps) => {
    const { field } = useController({
        control,
        defaultValue: "",
        name,
    });
    return (
        <Container error={!!error}>
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
            {error && <Text color="DANGER">{error}</Text>}
        </Container>
    );
};

export default InputText;
