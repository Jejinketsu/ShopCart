import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { decrement, increment } from "../redux/slices/counter";

const Home = () => {
    const counter = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Counter: {counter.value}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(increment())}
            >
                <Text>+ 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(decrement())}
            >
                <Text>- 1</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderColor: "white",
    },
});

export default Home;
