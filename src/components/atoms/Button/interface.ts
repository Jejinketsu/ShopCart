import { GlobalColorInterface } from "../../../global/interfaces/colors";

export interface IButtonProps extends GlobalColorInterface {
    onPress: () => void;
    label?: string;
}

export interface TouchInterface extends GlobalColorInterface {}
