import styled, { css } from "styled-components/native";
import Text from "../Text";
import { TouchInterface } from "./interface";

export const ButtonComponent = styled.TouchableOpacity<TouchInterface>`
    background-color: ${({ theme, color, type }) =>
        type === "solid"
            ? color
                ? theme.colors[color]
                : theme.colors.ACCENTED_0
            : theme.colors.LIGHT};
    padding: 15px;
    border-radius: 10px;
    border-width: 3px;
    border-color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.ACCENTED_0};
    align-items: center;
    width: 100%;
`;

export const ButtonText = styled(Text).attrs(({ type }: TouchInterface) => ({
    color: type === "solid" ? "ACCENTED_1" : "PRIMARY_1",
}))<TouchInterface>`
    font-weight: bold;
`;
