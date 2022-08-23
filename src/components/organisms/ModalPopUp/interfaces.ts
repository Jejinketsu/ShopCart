import { IButtonProps } from "../../atoms/Button/interface";

export interface IModalPopUpProps {
    title: string;
    description?: string;
    ConfirmButtonProps?: IButtonProps;
    CancelButtonProps?: IButtonProps;
}

export interface IModalPopUpRefProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export interface IButtonBox {
    isHalved: boolean;
}
