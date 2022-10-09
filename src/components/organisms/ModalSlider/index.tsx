import React, {
    forwardRef,
    Ref,
    useImperativeHandle,
    useState,
    useCallback,
} from "react";
import { Animated, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { ModalRefInterface, ModalSliderProps } from "./interfaces";
import {
    AnimatedContainer,
    AnimatedModal,
    CloseButton,
    ModalHeader,
    ModalTitle,
    TouchClose,
} from "./styles";

const { height } = Dimensions.get("window");

const ModalSlider = forwardRef(
    (
        {
            children,
            title,
            onCloseAction,
            onOpenAction,
            modalHeight,
        }: ModalSliderProps,
        ref: Ref<ModalRefInterface>
    ) => {
        const [isOpen, setIsOpen] = useState(false);
        const [state, setState] = useState({
            opacity: new Animated.Value(0),
            container: new Animated.Value(height),
            modal: new Animated.Value(height),
        });

        const openModal = useCallback(() => {
            if (onOpenAction) onOpenAction();
            Animated.sequence([
                Animated.timing(state.container, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: false,
                }),
                Animated.timing(state.opacity, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.spring(state.modal, {
                    toValue: 0,
                    bounciness: 5,
                    useNativeDriver: true,
                }),
            ]).start();
            setIsOpen(true);
        }, [onOpenAction, setIsOpen, state]);

        const closeModal = useCallback(() => {
            if (onCloseAction) onCloseAction();
            Animated.sequence([
                Animated.timing(state.modal, {
                    toValue: height,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(state.opacity, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: false,
                }),
                Animated.timing(state.container, {
                    toValue: height,
                    duration: 100,
                    useNativeDriver: false,
                }),
            ]).start();
            setIsOpen(false);
        }, [onCloseAction, setIsOpen, state]);

        useImperativeHandle(
            ref,
            () => ({
                isOpen,
                open: openModal,
                close: closeModal,
            }),
            [openModal, closeModal, isOpen]
        );

        return (
            <>
                {isOpen && (
                    <AnimatedContainer
                        opacity={state.opacity}
                        translateY={state.container}
                    >
                        <TouchClose onPress={closeModal} />
                        <AnimatedModal
                            translateY={state.modal}
                            title={title}
                            modalHeight={modalHeight}
                        >
                            <>
                                {title && (
                                    <ModalHeader>
                                        <ModalTitle>{title}</ModalTitle>
                                        <CloseButton
                                            iconName="times"
                                            onPress={closeModal}
                                        />
                                    </ModalHeader>
                                )}
                                <ScrollView>
                                    {children}
                                </ScrollView>
                            </>
                        </AnimatedModal>
                    </AnimatedContainer>
                )}
            </>
        );
    }
);

export default ModalSlider;
