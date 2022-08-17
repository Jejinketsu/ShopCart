import React from "react";
import { ButtonComponent, ButtonIconContent } from "./styles";
import { IButtonIconProps } from "./interface";

const ButtonIcon = ({
    iconName = "plus",
    onPress,
    color,
    bgColor,
    size,
    ...rest
}: IButtonIconProps) => {
    return (
        <ButtonComponent color={bgColor} onPress={onPress} {...rest}>
            <ButtonIconContent size={size} color={color} name={iconName} />
        </ButtonComponent>
    );
};

export default ButtonIcon;
