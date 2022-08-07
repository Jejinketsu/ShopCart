import styled from "styled-components/native";
import Text from "../Text";
import { TouchInterface } from "./interface";

export const ButtonComponent = styled.TouchableOpacity<TouchInterface>`
    background-color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.ACCENTED_0};
    padding: 15px;
    border-radius: 10px;
    align-items: center;
`;

export const ButtonText = styled(Text).attrs(() => ({
    color: "ACCENTED_1",
}))`
    font-weight: bold;
`;
