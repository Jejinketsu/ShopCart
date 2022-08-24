import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.ACCENTED_0};
`;

export const Logo = styled.Image`
    margin-top: auto;
`;

export const FormContainer = styled.View`
    width: 100%;
    height: 60%;
    padding: 18px 20px;
    margin-top: auto;
    background: ${({ theme }) => theme.colors.SECONDARY_0};
    align-items: center;
`;

export const TextField = styled.View`
    width: 100%;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid;
`;
