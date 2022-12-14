
import { useEffect, useState, useContext } from 'react'

import Toast from 'react-native-toast-message';

import { defaultCurrencies, IReturnCurrencies } from '@/shared/services/SwapzoneEndpoints/compatibleCurrencies/interfaces';
import { compatibleCurrencies } from '@/shared/services/SwapzoneEndpoints';

import { SwapCryptoContext } from '@/context';

import { IUseModalHook } from "./interfaces";


const useModalHook = (): IUseModalHook => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cryptosList, setCryptosList] = useState<IReturnCurrencies[]>([defaultCurrencies]);
    const [filteredList, setFilteredList] = useState<IReturnCurrencies[] | []>([]);
    const [currentSearchCurrency, setCurrentSearchCurrency] = useState<string>("")

    const {
        currentCryptoToSend,
        setCurrentCryptoToSend,
        currentCryptoToReceived,
        setCurrentCryptoToReceived
    } = useContext(SwapCryptoContext)

    useEffect(() => {
        async function loadCurrencies() {
            try {
                const cryptosEnabled = await compatibleCurrencies()

                setCryptosList(cryptosEnabled)
            } catch (error: any) {
                Toast.show({
                    type: 'error',
                    text1: "Error in get cryptocurrencies list",
                    text2: error?.message || "",
                    visibilityTime: 7000
                })
            }
        }

        loadCurrencies()
    }, [])


    //TODO: update cryptos list
    useEffect(() => {
        const filtered = cryptosList.filter(crypto => crypto.name.toLowerCase().includes(currentSearchCurrency.toLowerCase()));

        setFilteredList(filtered)
    }, [currentSearchCurrency])

    const selectedCrypto = (isToSend: boolean, currencySelected: IReturnCurrencies) => {
        if (isToSend) {
            setCurrentCryptoToSend({ amount: currentCryptoToSend.amount, ...currencySelected })
            handleCloseModal()
        } else {
            setCurrentCryptoToReceived({ amount: currentCryptoToReceived.amount, ...currencySelected })
            handleCloseModal()
        }
    }

    const handleSearchCurrency = (currencyName: string) => {
        setCurrentSearchCurrency(currencyName)
    }

    const handleCloseModal = () => {
        setFilteredList([])
        setCurrentSearchCurrency("")
        setModalVisible(!modalVisible)
    }

    return {
        modalVisible,
        setModalVisible,
        handleCloseModal,
        cryptosList,
        setCryptosList,
        selectedCrypto,
        handleSearchCurrency,
        currentSearchCurrency,
        filteredList
    }
}

export default useModalHook;