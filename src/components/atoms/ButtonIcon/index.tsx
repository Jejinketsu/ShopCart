import React from "react";
import { ButtonComponent, ButtonIconContent } from "./styles";
import { IButtonIconProps } from "./interface";

const ButtonIcon = ({
    iconName = "plus",
    onPress,
    color,
    bgColor,
    size,
}: IButtonIconProps) => {
    return (
        <ButtonComponent color={bgColor} onPress={onPress}>
            <ButtonIconContent size={size} color={color} name={iconName} />
        </ButtonComponent>
    );
};

export default ButtonIcon;
