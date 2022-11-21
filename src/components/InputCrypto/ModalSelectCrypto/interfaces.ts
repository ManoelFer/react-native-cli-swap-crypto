import { IReturnCurrencies } from "@/shared/services/SwapzoneEndpoints/compatibleCurrencies/interfaces";

export interface IModalProps {
    cryptoSelected: string;
    isToSend: boolean;
}

export interface IUseModalHook {
    modalVisible: boolean;
    setModalVisible: (modalVisible: boolean) => void;
    handleCloseModal: () => void;
    cryptosList: IReturnCurrencies[];
    setCryptosList: (cryptosList: IReturnCurrencies[]) => void;
    selectedCrypto: (isToSend: boolean, currencySelected: IReturnCurrencies) => void;
    handleSearchCurrency: (currencyName: string) => void;
    currentSearchCurrency: string;
    filteredList: IReturnCurrencies[];
}