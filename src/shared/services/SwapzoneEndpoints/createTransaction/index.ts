import instance from "@/shared/services/api.config"

import { IBodyTransaction, IResponseTransaction } from "./interfaces"

export const createTransaction = async (transaction: IBodyTransaction): Promise<IResponseTransaction> => {
    return instance.post("/exchange/create", transaction)
}