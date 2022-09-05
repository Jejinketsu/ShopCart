import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export interface FontAwesomeIconsInterface {
    iconNames: keyof typeof FontAwesome.glyphMap;
}

export type FontAwesomeIconsType = keyof typeof FontAwesome.glyphMap;

export interface FontAwesome5IconsInterface {
    iconNames: keyof typeof FontAwesome5.glyphMap;
}

export type FontAwesome5IconsType = keyof typeof FontAwesome5.glyphMap;
