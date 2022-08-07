import styled from "styled-components/native";

export const Container = styled.View`
    margin: 10px 0px;
`;

export const InputComponent = styled.TextInput`
    height: 50px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.SECONDARY_0};
    border-radius: 7px;
    padding-left: 15px;
    margin-top: 5px;
`;
