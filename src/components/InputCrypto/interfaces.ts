import { ViewProps } from "react-native";

export interface IInputProps extends ViewProps {
    label: string;
    amountSend: string;
    setAmountSend: (amountSend: string) => void;
    cryptoSelected: string;
    disabled: boolean;
    onEndEditing?: () => void;
}