import { IReturnRate } from "@/shared/services/SwapzoneEndpoints/getRate/interfaces";
import { createContext, useState } from "react";
import { ISwapCryptoContextProps, ISwapCryptoContextProviderProps } from "./interfaces";

export const SwapCryptoContext = createContext<ISwapCryptoContextProps>(
    {} as ISwapCryptoContextProps
);

export function SwapCryptoContextProvider({
    children,
}: ISwapCryptoContextProviderProps): JSX.Element {
    const [currentRate, setCurrentRate] = useState<IReturnRate>()

    return (
        <SwapCryptoContext.Provider
            value={{
                currentRate,
                setCurrentRate
            }}
        >
            {children}
        </SwapCryptoContext.Provider>
    );
}