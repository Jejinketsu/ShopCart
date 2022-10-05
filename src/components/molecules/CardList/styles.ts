import styled from "styled-components/native";
import Text from "../../atoms/Text";

export const ItemCard = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.LIGHT};
    width: 100%;
    height: 80px;
    padding: 10px;
    margin-bottom: 10px;
    shadow-color: ${({ theme }) => theme.colors.DARK};
    elevation: 2;
    border-radius: 7px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const Icon = styled.View`
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.SECONDARY_1};
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

export const ContentInfo = styled.View`
    margin-left: 20px;
    width: 60%;
    flex-direction: column;
`;

export const TitleText = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    border-radius: 7px;
`;

export const OpaqueText = styled(Text).attrs(({ typeScale }) => ({
    color: "PRIMARY_0",
    typeScale: typeScale,
}))`
    font-weight: bold;
    font-size: 14px;
    margin-top: 6px;
`;

export const StatusText = styled(Text).attrs(({ typeScale, color }) => ({
    color,
    typeScale: typeScale,
}))`
    font-weight: bold;
    font-size: 14px;
    margin-top: 6px;
`;
