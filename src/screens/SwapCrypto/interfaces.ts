export interface IUseSwapHook {
    cryptoToSend: string;
    setCryptoToSend: (cryptoToSend: string) => void;
    cryptoToReceive: string;
    setCryptoToReceive: (cryptoToReceive: string) => void;
    handleCryptoBeforeSend: (cryptoToSend: string) => void;
}