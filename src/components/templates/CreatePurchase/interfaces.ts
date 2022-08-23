import React from "react";
import { IButtonProps } from "../../atoms/Button/interface";
import { IInputTextProps } from "../../atoms/inputText/interface";
import {
    IModalPopUpProps,
    IModalPopUpRefProps,
} from "../../organisms/ModalPopUp/interfaces";

export interface ICreatePurchaseProps {
    InputTitleProps: IInputTextProps;
    InputBudgetProps: IInputTextProps;
    CreateButtonProps: IButtonProps;
    ModalPopUpProps: {
        props: IModalPopUpProps;
        ref: React.RefObject<IModalPopUpRefProps>;
    };
}
