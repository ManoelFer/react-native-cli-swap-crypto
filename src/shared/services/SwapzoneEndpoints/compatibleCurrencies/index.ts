import instance from "../../api.config"

import { IReturnCurrencies } from "./interfaces"

export const compatibleCurrencies = async (): Promise<IReturnCurrencies[]> => {
    return instance.get("/exchange/currencies")
}