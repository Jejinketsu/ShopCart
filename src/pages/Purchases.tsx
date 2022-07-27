import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import React from "react";

const Purchases = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Purchases Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text>go to home</Text>
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

export default Purchases;
