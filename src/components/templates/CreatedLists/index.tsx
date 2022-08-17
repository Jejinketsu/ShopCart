import React from "react";
import { FlatList } from "react-native-gesture-handler";
import InputText from "../../atoms/inputText";
import CardList from "../../molecules/CardList";
import { CreatedListsProps } from "./interfaces";
import { Container, ContentList } from "./styles";

const CreatedListsTemplate = ({
    CardListProps,
    InputSearchProps,
}: CreatedListsProps) => {
    return (
        <Container>
            <InputText {...InputSearchProps} />

            <ContentList showsVerticalScrollIndicator={false}>
                <FlatList
                    data={CardListProps}
                    keyExtractor={(item, index) => item.title + index}
                    renderItem={({ item }) => <CardList {...item} />}
                />
            </ContentList>
        </Container>
    );
};

export default CreatedListsTemplate;
