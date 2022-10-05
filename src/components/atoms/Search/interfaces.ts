import { Control } from "react-hook-form";
import { IInputTextProps } from "../inputText/interface";

export interface SearchInterface {
    serchInputProps?: IInputTextProps;
    control: Control<any>;
    onSearch?: (value: string) => void;
    onItemSelected?: (value: string) => void;
    data?: string[];
    showList?: boolean;
}

export interface SearchRefInterface {
    clearSearch: () => void;
}
