import { useContext, useState } from 'react'

import { getRate } from '@/shared/services/SwapzoneEndpoints';

import { IUseSwapHook } from "./interfaces";
import { Alert } from 'react-native';
import { SwapCryptoContext } from '@/context';

const useSwapHook = (): IUseSwapHook => {
    const [cryptoToSend, setCryptoToSend] = useState("")
    const [cryptoToReceive, setCryptoToReceive] = useState("")

    const { setCurrentRate } = useContext(SwapCryptoContext)

    const handleCryptoBeforeSend = async (value: string) => {
        setCryptoToReceive("Loading...")

        try {
            const rate = await getRate({
                from: "eth",
                to: "bat",
                amount: Number(value),
                rateType: "all",
                noRefundAddress: false,
                chooseRate: "recommended",
                availableInUSA: false
            })

            setCryptoToReceive(rate.amountTo.toString())
            setCurrentRate(rate)
        } catch (error) {
            setCryptoToReceive("")
            Alert.alert("Error to get rate")
        }
    }

    return {
        cryptoToSend,
        setCryptoToSend,
        cryptoToReceive,
        setCryptoToReceive,
        handleCryptoBeforeSend
    }
}

export default useSwapHook;