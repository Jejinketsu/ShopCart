import { GlobalColorInterface } from "../../../global/interfaces/colors";

export interface IButtonProps extends GlobalColorInterface {
    onPress: () => void;
    label?: string;
    type?: "solid" | "outline";
}

export interface TouchInterface extends GlobalColorInterface {
    type: "solid" | "outline";
}
