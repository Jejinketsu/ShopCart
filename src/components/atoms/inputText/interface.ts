import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons';

export interface IInputTextProps extends TextInputProps {
    title?: string;
    iconName?: keyof typeof Feather.glyphMap;
}
