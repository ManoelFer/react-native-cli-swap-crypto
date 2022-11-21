import { useContext, useState } from 'react'
import { Alert } from 'react-native';

import { SwapCryptoContext } from '@/context';

import { createTransaction } from '@/shared/services/SwapzoneEndpoints';

import { IUseSwapHook } from "./interfaces";


const useSwapHook = (): IUseSwapHook => {
    const [loading, setLoading] = useState<boolean>(false)
    const {
        currentRate,
        setCurrentTransaction,
        currentCryptoToSend
    } = useContext(SwapCryptoContext)

    const handleSendTransaction = async () => {
        setLoading(true)
        /*TODO: 
            precisa adicionar uma validação mais robusta, mas por conta do tempo, vamos apenas validar
            se existe um valor para ser trocado e se já foi carregado o quotaId
        */
        if (!currentCryptoToSend.amount && !currentRate?.quotaId) {
            return Alert.alert("Empty value to send or get")
        }

        try {
            const resTransaction = await createTransaction()

            setCurrentTransaction(resTransaction)
            setLoading(false)

            Alert.alert("Transaction created")
        } catch (error) {
            setLoading(false)
            Alert.alert("Erro in create transaction")
        }
    }

    return {
        handleSendTransaction,
        loading,
        setLoading
    }
}

export default useSwapHook;