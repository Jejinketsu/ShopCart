import { TouchableOpacityProps } from "react-native";
import { GlobalColorInterface } from "../../../global/interfaces/colors";
import { FontAwesome } from "@expo/vector-icons";

type icons = keyof typeof FontAwesome.glyphMap;
export interface IButtonIconProps extends TouchableOpacityProps {
    onPress: () => void;
    iconName: icons;
    color?: GlobalColorInterface["color"];
    bgColor?: GlobalColorInterface["color"];
    size?: number;
}

export interface TouchInterface extends GlobalColorInterface {}

export interface IconInterface extends GlobalColorInterface {
    name: string;
    size?: number;
}
