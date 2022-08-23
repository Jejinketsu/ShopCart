import { IButtonProps } from "../../atoms/Button/interface";
import { IButtonIconProps } from "../../atoms/ButtonIcon/interface";
import { IInputTextProps } from "../../atoms/inputText/interface";
import {
    ModalRefInterface,
    ModalSliderProps,
} from "../../organisms/ModalSlider/interfaces";

export interface IPurchaseTracking {
    products: object[];
    DoneButtonProps: IButtonProps;
    AddButtonProps: IButtonProps;
    PlusButtonProps: IButtonIconProps;
    ModalProps: ModalSliderProps;
    ModalRef: React.RefObject<ModalRefInterface>;
    ProductInputProps: IInputTextProps;
    PriceInputProps: IInputTextProps;
    QuantityInputProps: IInputTextProps;
}

export interface StatusText {
    status: number;
}
