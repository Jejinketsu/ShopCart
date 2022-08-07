export interface IHomeProps {
    NavigationButtonsProp: NavigationButton[];
}

interface NavigationButton {
    title: string;
    iconName: string;
    onPress: () => void;
}

export interface IContentCardProps {
    title?: string;
    orientation?: "row" | "column";
    justify?: "space-between" | "space-around" | "space-evenly";
}

export interface IVisibilityProps {
    isVisible?: boolean;
}
