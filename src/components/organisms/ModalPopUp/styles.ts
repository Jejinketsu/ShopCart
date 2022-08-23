import styled from "styled-components/native";
import Text from "../../atoms/Text";
import { IButtonBox } from "./interfaces";

export const Container = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    width: 90%;
    background-color: ${({ theme }) => theme.colors.LIGHT};
    border-radius: 10px;
    padding: 20px;
`;

export const Title = styled(Text).attrs(() => ({
    typeScale: "h6",
}))`
    color: ${({ theme }) => theme.colors.DARK};
`;

export const Description = styled(Text).attrs(() => ({
    typeScale: "body1",
}))`
    color: ${({ theme }) => theme.colors.PRIMARY_1};
`;

export const ButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
`;

export const ButtonBox = styled.View<IButtonBox>`
    width: ${({ isHalved }) => (isHalved ? 48 : 100)}%;
`;
