import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.LIGHT};
    padding: 18px 18px 0px 18px;
`;

export const ContentCard = styled.View`
    background-color: ${({ theme }) => theme.colors.LIGHT};
    width: 100%;
    max-height: 58%;
    padding: 14px;
    border-radius: 7px;
    elevation: 4;
`;

export const ContentList = styled.View`
    width: 100%;
    max-height: 80%;
    margin: 20px 0px;
    border-radius: 7px;
`;
