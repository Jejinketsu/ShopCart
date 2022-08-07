import styled from "styled-components/native";
import { ITextProps } from "./interface";

export const TextComponent = styled.Text<ITextProps>`
    color: ${({ theme, color, typeScale }) =>
        color ? theme.colors[color] : theme.colors.DARK};
    font-size: ${({ theme, typeScale }) =>
        typeScale ? theme.fontSizes[typeScale] : theme.fontSizes.body1}px;
`;
