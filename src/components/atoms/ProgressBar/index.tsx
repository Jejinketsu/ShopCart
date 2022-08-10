import React from "react";
import { IProgressBarProps } from "./interface";
import { ProgressBarComponent, ProgressBarFrame } from "./styles";

const ProgressBar = ({ progress }: IProgressBarProps) => {
    return (
        <ProgressBarFrame>
            <ProgressBarComponent progress={progress ? progress : 0} />
        </ProgressBarFrame>
    );
};

export default ProgressBar;
