import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Profile Screen</Text>
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

export default Profile;
