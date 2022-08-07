import React from "react";

import { ValueText, OpaqueText, Container, Line, ItemIcon } from "./styles";
import { IItemCardProps } from "./interface";

const ItemCard = ({ value, title, date, time }: IItemCardProps) => {
    return (
        <Container>
            <Line>
                <ValueText typeScale="h1">R$ {value}</ValueText>
                <OpaqueText typeScale="h6">{date}</OpaqueText>
            </Line>
            <Line>
                <OpaqueText typeScale="body2">{title}</OpaqueText>
                <OpaqueText typeScale="body2">{time}</OpaqueText>
            </Line>
        </Container>
    );
};

export default ItemCard;
