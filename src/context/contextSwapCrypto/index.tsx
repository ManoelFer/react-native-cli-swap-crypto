import { createContext, useState, useEffect } from "react";
import { Alert } from 'react-native'

import { defaultRate, IReturnRate } from "@/shared/services/SwapzoneEndpoints/getRate/interfaces";
import { defaultTransaction, IResponseTransaction } from "@/shared/services/SwapzoneEndpoints/createTransaction/interfaces"
import { defaultToReceive, defaultToSend, IReturnCurrencies } from "@/shared/services/SwapzoneEndpoints/compatibleCurrencies/interfaces";

import { ISwapCryptoContextProps, ISwapCryptoContextProviderProps } from "./interfaces";
import { getRate } from "@/shared/services/SwapzoneEndpoints";


export const SwapCryptoContext = createContext<ISwapCryptoContextProps>(
    {} as ISwapCryptoContextProps
);

export function SwapCryptoContextProvider({
    children,
}: ISwapCryptoContextProviderProps): JSX.Element {
    const [currentRate, setCurrentRate] = useState<IReturnRate>(defaultRate)
    const [currentTransaction, setCurrentTransaction] = useState<IResponseTransaction>(defaultTransaction)
    const [currentCryptoToSend, setCurrentCryptoToSend] = useState<IReturnCurrencies>(defaultToSend)
    const [currentCryptoToReceived, setCurrentCryptoToReceived] = useState<IReturnCurrencies>(defaultToReceive)


    //TODO: Whenever the ticker changes, redo the request to get the rate
    useEffect(() => {
        if (currentCryptoToSend.amount && Number(currentCryptoToSend.amount) > 0) {
            handleCryptoBeforeSend(currentCryptoToSend.amount || "")
        }
    }, [currentCryptoToSend.ticker, currentCryptoToReceived.ticker])


    const handleCryptoBeforeSend = async (value: string) => {
        setCurrentCryptoToReceived({ ...currentCryptoToReceived, amount: "Loading..." })

        try {
            const rate = await getRate({
                from: currentCryptoToSend.ticker,
                to: currentCryptoToReceived.ticker,
                amount: Number(value),
                rateType: "all",
                noRefundAddress: false,
                chooseRate: "recommended",
                availableInUSA: false
            })

            if (rate?.error) {
                throw new Error(rate.message)
            }

            setCurrentCryptoToReceived({ ...currentCryptoToReceived, amount: rate.amountTo.toString() })
            setCurrentRate(rate)
        } catch (error: any) {
            console.log('Original erro to get rate :>> ', error.message);
            setCurrentCryptoToReceived({ ...currentCryptoToReceived, amount: undefined })
            Alert.alert(`Error to get rate! Original API error: ${error?.message}`)
        }
    }

    return (
        <SwapCryptoContext.Provider
            value={{
                currentRate,
                setCurrentRate,
                currentTransaction,
                setCurrentTransaction,
                currentCryptoToSend,
                setCurrentCryptoToSend,
                currentCryptoToReceived,
                setCurrentCryptoToReceived,
                handleCryptoBeforeSend
            }}
        >
            {children}
        </SwapCryptoContext.Provider>
    );
}