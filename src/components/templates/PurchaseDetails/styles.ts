import styled from "styled-components/native";
import Text from "../../atoms/Text";

export const Container = styled.View`
    flex: 1;
    background-color: #e6e6e6;
    padding: 18px 18px 0px 18px;
`;

export const ContentCard = styled.View`
    background-color: #fff;
    width: 100%;
    max-height: 58%;
    padding: 14px;
    margin-bottom: 24px;
    border-radius: 7px;
    elevation: 4;
`;

export const ContentRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    border-radius: 7px;
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.PRIMARY_1};
`;

export const StatusText = styled(Text).attrs(({ typeScale }) => ({
    color: "SUCCESS",
    typeScale: typeScale,
}))`
    font-weight: bold;
    font-size: 14px;
    margin-top: 6px;
`;

export const OpaqueText = styled(Text).attrs(() => ({
    color: "PRIMARY_0",
}))`
    margin-left: 15px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
`;
