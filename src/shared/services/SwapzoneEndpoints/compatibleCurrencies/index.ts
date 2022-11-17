import instance from "@/shared/services/api.config"

import { IReturnCurrencies } from "./interfaces"

export const compatibleCurrencies = async (): Promise<IReturnCurrencies[]> => {
    return instance.get("/exchange/currencies")
}