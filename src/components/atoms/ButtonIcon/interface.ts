import { GlobalColorInterface } from "../../../global/interfaces/colors";

export interface IButtonIconProps extends GlobalColorInterface {
    onPress: () => void;
    iconName: string;
    bgColor?: GlobalColorInterface["color"];
    size?: number;
}

export interface TouchInterface extends GlobalColorInterface {}

export interface IconInterface extends GlobalColorInterface {
    name: string;
    size?: number;
}
