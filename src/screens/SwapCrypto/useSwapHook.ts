import { useContext, useState } from 'react'
import Toast from 'react-native-toast-message';

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
            setLoading(false)

            return Toast.show({
                type: 'info',
                text1: "Empty value to send or get",
                text2: "You need add on value to send or get! 😯",
                visibilityTime: 7000
            })
        }

        try {
            const resTransaction = await createTransaction()

            setCurrentTransaction(resTransaction)
            setLoading(false)

            Toast.show({
                type: 'success',
                text1: 'Transaction created',
                text2: "Your transaction was successfully! 🫡",
                visibilityTime: 7000
            })
        } catch (error: any) {
            setLoading(false)

            Toast.show({
                type: 'error',
                text1: 'Error in create transaction',
                text2: error.message || "",
                visibilityTime: 7000
            })
        }
    }

    return {
        handleSendTransaction,
        loading,
        setLoading
    }
}

export default useSwapHook;