import styled from "styled-components/native";

import InputText from "../inputText";
import Text from "../Text";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.LIGHT};
`;

export const SearchInput = styled(InputText)`
    border-color: ${({ theme }) => theme.colors.PRIMARY_0};
`;

export const SearchDataList = styled.FlatList`
    max-height: 220px;
    margin-top: 5px;
    background-color: ${({ theme }) => theme.colors.SECONDARY_0};
    border-radius: 8px;
`;

export const SearchDataItem = styled.TouchableOpacity`
    border-bottom-width: 1px;
    color: ${({ theme }) => theme.colors.ACCENTED_1};
    padding: 12px 10px;
    border-bottom-color: ${({ theme }) => theme.colors.LIGHT};
`;

export const SearchItemText = styled(Text).attrs(() => ({
    typeScale: "subtitle2",
}))``;
