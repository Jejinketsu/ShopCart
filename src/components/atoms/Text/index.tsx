import React from "react";
import { ITextProps } from "./interface";
import { TextComponent } from "./styles";

const Text = ({ children, ...rest }: ITextProps) => {
    return <TextComponent {...rest}>{children}</TextComponent>;
};

export default Text;
