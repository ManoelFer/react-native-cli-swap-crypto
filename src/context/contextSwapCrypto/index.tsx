import { createContext, useState } from "react";

import { defaultRate, IReturnRate } from "@/shared/services/SwapzoneEndpoints/getRate/interfaces";
import { defaultTransaction, IResponseTransaction } from "@/shared/services/SwapzoneEndpoints/createTransaction/interfaces"

import { ISwapCryptoContextProps, ISwapCryptoContextProviderProps } from "./interfaces";
;

export const SwapCryptoContext = createContext<ISwapCryptoContextProps>(
    {} as ISwapCryptoContextProps
);

export function SwapCryptoContextProvider({
    children,
}: ISwapCryptoContextProviderProps): JSX.Element {
    const [currentRate, setCurrentRate] = useState<IReturnRate>(defaultRate)
    const [currentTransaction, setCurrentTransaction] = useState<IResponseTransaction>(defaultTransaction)

    return (
        <SwapCryptoContext.Provider
            value={{
                currentRate,
                setCurrentRate,
                currentTransaction,
                setCurrentTransaction
            }}
        >
            {children}
        </SwapCryptoContext.Provider>
    );
}