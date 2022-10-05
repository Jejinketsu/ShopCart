import React, {
    useRef,
    useState,
    useCallback,
    useImperativeHandle,
    Ref,
    forwardRef,
} from "react";

import { debounce } from "lodash";

import {
    Container,
    SearchDataItem,
    SearchDataList,
    SearchInput,
    SearchItemText,
} from "./styles";

import { SearchInterface } from "./interfaces";
import { View } from "react-native";

const Search = forwardRef(
    (props: SearchInterface, ref: Ref<{ clearSearch: () => void }>) => {
        const {
            serchInputProps,
            onSearch = () => {},
            onItemSelected = () => {},
            data = [],
            control,
            showList = false,
        } = props;
        const [, setRefresh] = useState(false);
        const [toogleList, setToogleList] = useState(false);

        const debounceSearch = useCallback(
            debounce((value) => {
                onSearch(value);
            }, 200),
            [onSearch]
        );

        const search = (text: string) => {
            debounceSearch(text);
            if (!toogleList) setToogleList(true);
        };

        useImperativeHandle(
            ref,
            () => {
                return {
                    clearSearch: () => {
                        setRefresh((state) => !state);
                    },
                };
            },
            []
        );

        return (
            <Container>
                <SearchInput
                    name="search"
                    placeholder="Search..."
                    control={control}
                    onChangeAction={search}
                    {...serchInputProps}
                />

                <View>
                    {showList && toogleList && (
                        <SearchDataList
                            data={data}
                            keyExtractor={(item, index) => `${item}-${index}`}
                            maxToRenderPerBatch={10}
                            initialNumToRender={10}
                            nestedScrollEnabled
                            renderItem={({ item }) => (
                                <SearchDataItem
                                    onPress={() => {
                                        onItemSelected(item);
                                        setToogleList(false);
                                        setRefresh((state) => !state);
                                    }}
                                >
                                    <SearchItemText>{item}</SearchItemText>
                                </SearchDataItem>
                            )}
                        />
                    )}
                </View>
            </Container>
        );
    }
);

export default Search;
