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

export const FormContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: "center",
    },
})`
    width: 100%;
    max-height: 60%;
    padding: 18px 20px;
    margin-top: auto;
    background: ${({ theme }) => theme.colors.SECONDARY_0};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const TextField = styled.View`
    width: 100%;
    border-color: ${({ theme }) => theme.colors.ACCENTED_0};
    border-bottom-width: 2px;
    margin-top: 20px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.SECONDARY_0};
`;
