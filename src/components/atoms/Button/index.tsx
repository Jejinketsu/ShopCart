import React from "react";
import { IButtonProps } from "./interface";
import { ButtonComponent, ButtonText } from "./styles";

const Button = ({ label = "default", onPress, color }: IButtonProps) => {
    return (
        <ButtonComponent color={color} onPress={onPress}>
            <ButtonText>{label}</ButtonText>
        </ButtonComponent>
    );
};

export default Button;
