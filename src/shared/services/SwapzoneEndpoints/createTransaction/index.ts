import { useContext } from 'react'

import { SwapCryptoContext } from "@/context"

import instance from "@/shared/services/api.config"

import { IBodyTransaction, IResponseTransaction } from "./interfaces"

export const createTransaction = async (): Promise<IResponseTransaction> => {
    const { currentCryptoToSend, currentCryptoToReceived, currentRate } = useContext(SwapCryptoContext)

    return instance.post("/exchange/create", {
        from: currentCryptoToSend.ticker,
        to: currentCryptoToReceived.ticker,
        extraIdReceive: "",
        addressReceive: "0x5b42088bd2b66D5821D640e53967997C243df484",
        amountDeposit: Number(currentCryptoToSend.amount),
        refundAddress: "",
        refundExtraId: "0x5b42088bd2b66D5821D640e53967997C243df484",
        quotaId: currentRate.quotaId,
        fromNetwork: currentCryptoToSend.network,
        toNetwork: currentCryptoToReceived.network
    })
}