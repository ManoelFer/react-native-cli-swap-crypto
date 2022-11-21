import { ReactNode } from "react";

import { IReturnRate } from "@/shared/services/SwapzoneEndpoints/getRate/interfaces";
import { IResponseTransaction } from "@/shared/services/SwapzoneEndpoints/createTransaction/interfaces"
import { IReturnCurrencies } from "@/shared/services/SwapzoneEndpoints/compatibleCurrencies/interfaces";

export interface ISwapCryptoContextProps {
    currentRate: IReturnRate;
    setCurrentRate: (currentRate: IReturnRate) => void;

    currentTransaction: IResponseTransaction;
    setCurrentTransaction: (currentTransaction: IResponseTransaction) => void;

    currentCryptoToSend: IReturnCurrencies;
    setCurrentCryptoToSend: (currentCryptoToSend: IReturnCurrencies) => void;

    currentCryptoToReceived: IReturnCurrencies;
    setCurrentCryptoToReceived: (currentCryptoToReceived: IReturnCurrencies) => void;

    handleCryptoBeforeSend: (value: string) => void;
}

export interface ISwapCryptoContextProviderProps {
    children: ReactNode;
}