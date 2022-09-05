import { FontAwesomeIconsType } from "../../../global/interfaces/icons";

export interface CardListProps {
    title: string;
    subtitle: string | number;
    badge?: string | number;
    leftIcon?: FontAwesomeIconsType;
    rightIcon?: FontAwesomeIconsType;
}
