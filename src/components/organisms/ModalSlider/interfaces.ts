import React from "react";
import { Animated } from "react-native";

export interface ModalSliderProps {
    children?: React.ReactElement;
    title: string;
    modalHeight?: number;
    onCloseAction?: () => void;
    onOpenAction?: () => void;
}

export interface AnimatedViewInterface {
    opacity?: Animated.Value;
    translateY?: Animated.Value;
    title?: string;
    modalHeight?: number;
}

export interface ModalRefInterface {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}
