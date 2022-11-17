import { ReactNode } from "react";

import { IReturnRate } from "@/shared/services/SwapzoneEndpoints/getRate/interfaces";
import { IResponseTransaction } from "@/shared/services/SwapzoneEndpoints/createTransaction/interfaces"

export interface ISwapCryptoContextProps {
    currentRate: IReturnRate;
    setCurrentRate: (currentRate: IReturnRate) => void;
    currentTransaction: IResponseTransaction;
    setCurrentTransaction: (currentTransaction: IResponseTransaction) => void;
}

export interface ISwapCryptoContextProviderProps {
    children: ReactNode;
}