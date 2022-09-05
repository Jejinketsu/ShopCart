import styled from "styled-components/native";
import { ContainerInterface } from "./interface";

export const Container = styled.View<ContainerInterface>`
    width: 100%;
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme, error }) =>
        error ? theme.colors.DANGER : theme.colors.ACCENTED_0};
`;

export const InputContainer = styled.View`
    margin: 10px 0px;
    padding: 8px 10px;
    height: 50px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    background-color: #e5e7ea;
`;

export const InputComponent = styled.TextInput`
    height: 50px;
    width: 100%;
    background-color: #e5e7ea;
    border-radius: 10px;
    padding-left: 15px;
`;
