import styled from "styled-components/native";

import Text from "../../atoms/Text";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
    padding: 5px;
`;

export const ItemIcon = styled(FontAwesome5).attrs(() => ({
    name: "minus",
}))``;

export const Line = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ValueText = styled(Text)`
    font-size: 24px;
    font-weight: bold;
    border-radius: 7px;
`;

export const OpaqueText = styled(Text).attrs(({ typeScale }) => ({
    color: "PRIMARY_0",
    typeScale: typeScale,
}))`
    font-weight: bold;
`;
