export interface IUseSwapHook {
    handleSendTransaction: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}