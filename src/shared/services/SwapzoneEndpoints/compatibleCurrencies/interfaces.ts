export interface IReturnCurrencies {
    name: string;
    ticker: string;
    network: string;
    smartContract: string | null;
    amount?: string;
}

export const defaultCurrencies = {
    name: "",
    ticker: "",
    network: "",
    smartContract: "",
    amount: undefined,
}

export const defaultToSend = {
    name: "Ethereum",
    ticker: "eth",
    network: "ETH",
    smartContract: null,
    amount: undefined,
}

export const defaultToReceive = {
    name: "Basic Attention Token",
    ticker: "bat",
    network: "BAT",
    smartContract: "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    amount: undefined
}