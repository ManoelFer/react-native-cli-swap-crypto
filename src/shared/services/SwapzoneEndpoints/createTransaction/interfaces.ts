export interface IBodyTransaction {
    from: string;
    to: string;
    extraIdReceive?: string;
    addressReceive: string;
    amountDeposit: number;
    refundAddress: string;
    refundExtraId?: string;
    quotaId: string;
    fromNetwork: string;
    toNetwork: string;
}

export interface IResponseTransaction {
    transaction: ITransaction;
}

export interface ITransaction {
    id: string;
    quotaId: string;
    from: string;
    fromNetwork: string;
    toNetwork: string;
    to: string;
    status: string;
    addressReceive: string;
    extraIdReceive: string;
    addressDeposit: string;
    extraIdDeposit?: null;
    amountDeposit: string;
    amountEstimated: string;
    payinHash?: null;
    payoutHash?: null;
    hashReceive?: null;
    depositReceivedAt?: null;
    createdAt: string;
    payTill?: null;
    fee: number;
    refundExtraId: string;
    refundAddress: string;
    userUnique: string;
}

export const defaultTransaction = {
    transaction: {
        id: "",
        quotaId: "",
        from: "",
        fromNetwork: "",
        toNetwork: "",
        to: "",
        status: "",
        addressReceive: "",
        extraIdReceive: "",
        addressDeposit: "",
        extraIdDeposit: null,
        amountDeposit: "",
        amountEstimated: "",
        payinHash: null,
        payoutHash: null,
        hashReceive: null,
        depositReceivedAt: null,
        createdAt: "",
        payTill: null,
        fee: 0,
        refundExtraId: "",
        refundAddress: "",
        userUnique: ""
    }
}