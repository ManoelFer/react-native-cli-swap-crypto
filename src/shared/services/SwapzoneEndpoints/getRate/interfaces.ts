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
}