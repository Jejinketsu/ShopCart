import { TextProps } from "react-native";
import { GlobalColorInterface } from "../../../global/interfaces/colors";

export interface ITextProps extends TextProps {
    color?: GlobalColorInterface["color"];
    typeScale?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "subtitle1"
        | "subtitle2"
        | "body1"
        | "body2"
        | "caption"
        | "button"
        | "overline";
}
