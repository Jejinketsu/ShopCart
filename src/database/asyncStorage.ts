import AsyncStorage from "@react-native-async-storage/async-storage";

function isJsonString(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

const setData = async (key: string, value: string | object) => {
    try {
        const convertedValue =
            typeof value === "object" ? JSON.stringify(value) : value;
        await AsyncStorage.setItem(key, convertedValue);
    } catch (e) {
        console.error(e);
    }
};

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null && isJsonString(value)) {
            return JSON.parse(value);
        }
        return value;
    } catch (e) {
        console.error(e);
    }
};

const removeValue = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error(e);
    }
};

export const asyncStorage = { setData, getData, removeValue };
