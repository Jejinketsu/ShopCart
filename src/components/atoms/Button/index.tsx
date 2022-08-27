import React from "react";
import { IButtonProps } from "./interface";
import { ButtonComponent, ButtonText } from "./styles";

const Button = ({
    label = "default",
    onPress,
    color,
    type = "solid",
}: IButtonProps) => {
    return (
        <ButtonComponent color={color} type={type} onPress={onPress}>
            <ButtonText color={color} type={type}>
                {label}
            </ButtonText>
        </ButtonComponent>
    );
};

export default Button;
