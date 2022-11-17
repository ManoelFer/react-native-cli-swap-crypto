import { ReactNode } from "react";

import { IReturnRate } from "@/shared/services/SwapzoneEndpoints/getRate/interfaces";

export interface ISwapCryptoContextProps {
    currentRate?: IReturnRate;
    setCurrentRate: (currentRate: IReturnRate) => void;
}

export interface ISwapCryptoContextProviderProps {
    children: ReactNode;
}