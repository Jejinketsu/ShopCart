import { TouchableOpacityProps } from "react-native";
import { GlobalColorInterface } from "../../../global/interfaces/colors";
import { FontAwesomeIconsType } from "../../../global/interfaces/icons";
export interface IButtonIconProps extends TouchableOpacityProps {
    onPress: () => void;
    iconName: FontAwesomeIconsType;
    color?: GlobalColorInterface["color"];
    bgColor?: GlobalColorInterface["color"];
    size?: number;
}

export interface TouchInterface extends GlobalColorInterface {}

export interface IconInterface extends GlobalColorInterface {
    name: string;
    size?: number;
}
