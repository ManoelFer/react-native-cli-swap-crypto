export interface IQueryParametersRate {
    from: string;
    to: string;
    amount: number;
    rateType: string;
    noRefundAddress: boolean;
    chooseRate: string;
    availableInUSA: boolean;
}

export interface IReturnRate {
    adapter: string;
    from: string;
    fromNetwork: string;
    to: string;
    toNetwork: string;
    amountFrom: number;
    amountTo: number;
    minAmount: number;
    maxAmount?: number;
    quotaId: string;
    validUntil: Date;
    error?: string;
    message?: string;
}

export const defaultRate = {
    adapter: "",
    from: "",
    fromNetwork: "",
    to: "",
    toNetwork: "",
    amountFrom: 0,
    amountTo: 0,
    minAmount: 0,
    maxAmount: 0,
    quotaId: "",
    validUntil: new Date()
}