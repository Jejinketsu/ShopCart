import styled from "styled-components/native";
import { Animated } from "react-native";
import { AnimatedViewInterface } from "./interfaces";
import ButtonIcon from "../../atoms/ButtonIcon";
import Text from "../../atoms/Text";

export const AnimatedContainer = styled(Animated.View).attrs(
    ({ opacity, translateY }: AnimatedViewInterface) => ({
        style: {
            opacity: opacity,
            transform: [{ translateY: translateY }],
        },
    })
)<AnimatedViewInterface>`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
`;

export const AnimatedModal = styled(Animated.View).attrs(
    ({ translateY }: AnimatedViewInterface) => ({
        style: {
            transform: [{ translateY: translateY }],
        },
    })
)<AnimatedViewInterface>`
    bottom: 0;
    position: absolute;
    height: ${({ modalHeight }) => (modalHeight ? modalHeight : 90)}%;
    background-color: ${({ theme }) => theme.colors.LIGHT};
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-top: ${({ title }) => (title ? 0 : 17)}px;
`;

export const ModalHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 27px 20px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.SECONDARY_2};
`;

export const ModalTitle = styled(Text).attrs(() => ({
    color: "ACCENTED_1",
    typeScale: "h6",
}))`
    max-width: 85%;
`;

export const CloseButton = styled(ButtonIcon).attrs({
    color: "DARK",
})``;

export const TouchClose = styled.TouchableOpacity`
    position: absolute;
    width: 100%;
    height: 50%;
`;
