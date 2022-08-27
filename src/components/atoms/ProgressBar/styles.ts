import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { IProgressBarState } from "./interface";

export const ProgressBarFrame = styled.View`
    width: 100%;
    border-radius: 7px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.SECONDARY_2};
    margin-top: 5px;
`;

export const ProgressBarComponent = styled(LinearGradient).attrs(
    ({ theme }) => ({
        colors: [
            theme.colors.ACCENTED_0,
            theme.colors.ACCENTED_1,
            theme.colors.ACCENTED_0,
        ],
        locations: [0, 0.75, 1],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
    })
)<IProgressBarState>`
    width: ${({ progress }) => progress}%;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.ACCENTED_0};
    border-radius: 7px;
`;
