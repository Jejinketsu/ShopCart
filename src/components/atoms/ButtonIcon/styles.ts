import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

import { IconInterface, TouchInterface } from "./interface";

export const ButtonComponent = styled.TouchableOpacity<TouchInterface>`
    background-color: ${({ theme, color }) =>
        color ? theme.colors[color] : theme.colors.LIGHT};
    width: 55px;
    height: 55px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const ButtonIconContent = styled(FontAwesome5).attrs(
    ({ theme, name, color, size }) => ({
        name: name,
        size: size ? size : 34,
        color: color ? theme.colors[color] : theme.colors.ACCENTED_0,
    })
)<IconInterface>``;
