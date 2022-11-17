import { createContext, useState } from "react";
import { ISwapCryptoContextProps, ISwapCryptoContextProviderProps } from "./interfaces";

export const SwapCryptoContext = createContext<ISwapCryptoContextProps>(
    {} as ISwapCryptoContextProps
);

export function SwapCryptoContextProvider({
    children,
}: ISwapCryptoContextProviderProps): JSX.Element {
    const [meuNome, setMeuNome] = useState("Manoel")

    return (
        <SwapCryptoContext.Provider
            value={{
                meuNome
            }}
        >
            {children}
        </SwapCryptoContext.Provider>
    );
}