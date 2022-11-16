import { ViewProps } from "react-native";

export interface IInputProps extends ViewProps {
    label: string;
    text: string;
    setText: (text: string) => void;
    cryptoSelected: string;
}