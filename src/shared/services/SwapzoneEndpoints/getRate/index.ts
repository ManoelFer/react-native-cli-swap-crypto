import instance from "@/shared/services/api.config"

import { IQueryParametersRate, IReturnRate } from "./interfaces"

export const getRate = async ({
    from,
    to,
    amount,
    rateType,
    noRefundAddress,
    chooseRate,
    availableInUSA
}: IQueryParametersRate): Promise<IReturnRate> => {
    //TODO: quando for possível modificar esses parâmetros pelo modal, deverá conter os valores atuais
    return instance.get("/exchange/get-rate", {
        params: {
            from: from,
            to: to,
            amount: amount,
            rateType: rateType,
            noRefundAddress: noRefundAddress,
            chooseRate: chooseRate,
            availableInUSA: availableInUSA
        },
    })
}