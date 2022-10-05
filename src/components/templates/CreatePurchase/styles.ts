import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.SECONDARY_1};
    padding: 18px 18px 0px 18px;
`;

export const ContentCard = styled.View`
    background-color: ${({ theme }) => theme.colors.LIGHT};
    width: 100%;
    padding: 14px;
    margin-bottom: 24px;
    border-radius: 7px;
    elevation: 4;
`;

export const ButtonContainer = styled.View`
    margin-top: 20px;
`;
