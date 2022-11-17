import { useContext, useState } from 'react'
import { Alert } from 'react-native';

import { SwapCryptoContext } from '@/context';

import { createTransaction, getRate } from '@/shared/services/SwapzoneEndpoints';

import { IUseSwapHook } from "./interfaces";


const useSwapHook = (): IUseSwapHook => {
    const [cryptoToSend, setCryptoToSend] = useState("")
    const [cryptoToReceive, setCryptoToReceive] = useState("")
    const [loading, setLoading] = useState<boolean>(false)

    const { setCurrentRate, currentRate, setCurrentTransaction } = useContext(SwapCryptoContext)

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

    const handleSendTransaction = async () => {
        setLoading(true)
        /*TODO: 
            precisa adicionar uma validação mais robusta, mas por conta do tempo, vamos apenas validar
            se existe um valor para ser trocado e se já foi carregado o quotaId
        */
        if (!cryptoToSend && !currentRate?.quotaId) {
            return Alert.alert("Empty value to send or get")
        }

        //TODO: quando tivermos a implementação do modal com a seleção de moedas, vamos precisar 
        const bodyTransaction = {
            from: "eth",
            to: "bat",
            extraIdReceive: "",
            addressReceive: "0x5b42088bd2b66D5821D640e53967997C243df484",
            amountDeposit: Number(cryptoToSend),
            refundAddress: "",
            refundExtraId: "0x5b42088bd2b66D5821D640e53967997C243df484",
            quotaId: currentRate.quotaId,
            fromNetwork: "ETH",
            toNetwork: "BAT"
        }

        try {
            const resTransaction = await createTransaction(bodyTransaction)

            setCurrentTransaction(resTransaction)
            setLoading(false)

            Alert.alert("Transaction created")
        } catch (error) {
            setLoading(false)
            Alert.alert("Erro in create transaction")
        }
    }

    return {
        cryptoToSend,
        setCryptoToSend,
        cryptoToReceive,
        setCryptoToReceive,
        handleCryptoBeforeSend,
        handleSendTransaction,
        loading,
        setLoading
    }
}

export default useSwapHook;