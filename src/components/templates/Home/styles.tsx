import styled from "styled-components/native";
import { IContentCardProps, IVisibilityProps } from "./interfaces";
import ButtonIcon from "../../atoms/ButtonIcon";
import Text from "../../atoms/Text";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.SECONDARY_0};
    padding: 18px 18px 0px 18px;
`;

export const ContentCard = styled.View<IContentCardProps>`
    background-color: ${({ theme }) => theme.colors.LIGHT};
    width: 100%;
    max-height: 58%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px;
    margin-bottom: 24px;
    border-radius: 7px;
    elevation: 4;
`;

export const BigCurrencyTitle = styled.Text<IVisibilityProps>`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.DARK};
    background-color: ${({ theme, isVisible = true }) =>
        isVisible ? theme.colors.LIGHT : theme.colors.DARK};
    border-radius: 7px;
`;

export const TouchVisibility = styled(ButtonIcon).attrs(
    ({ isVisible = true }: IVisibilityProps) => ({
        iconName: isVisible ? "eye" : "eye-slash",
        color: "PRIMARY_0",
        size: 24,
    })
)<IVisibilityProps>``;

export const NavigationButtonBox = styled.View`
    align-items: center;
`;

export const NavigationButton = styled(ButtonIcon).attrs(() => ({
    bgColor: "ACCENTED_0",
    color: "ACCENTED_1",
    size: 30,
}))`
    padding: 5px;
    border-radius: 7px;
`;

export const NavigationText = styled(Text).attrs(() => ({
    color: "PRIMARY_0",
}))`
    font-size: 12px;
`;

export const OpaqueText = styled(Text).attrs(() => ({
    color: "PRIMARY_0",
}))`
    margin-left: 15px;
    margin-bottom: 10px
    font-weight: bold;
    font-size: 14px;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.SECONDARY_1};
    margin-bottom: 2px;
`;

export const EmptyListContainer = styled.View`
    width: 100%;
    align-items: center;
`;
