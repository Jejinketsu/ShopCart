import styled from "styled-components/native";
import CardList from "../../molecules/CardList";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.LIGHT};
`;

export const Card = styled(CardList)``;
