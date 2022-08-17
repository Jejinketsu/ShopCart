import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Control } from "react-hook-form";

export interface IInputTextProps extends TextInputProps {
    name: string;
    control: Control<any>;
    title?: string;
    iconName?: keyof typeof Feather.glyphMap;
}
