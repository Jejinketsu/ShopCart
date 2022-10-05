import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.LIGHT};
    padding: 18px 18px 0px 18px;
`;

export const ContentList = styled.ScrollView`
    width: 100%;
    margin: 20px 0px;
    border-radius: 7px;
`;
