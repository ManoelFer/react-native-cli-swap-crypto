import { useContext } from 'react'

import { InputCrypto } from '@/components'

import useSwapHook from './useSwapHook'

import { SwapCryptoContext } from '@/context'

import { ButtonExchange, Container, Content, SpaceBetweenInputs, Title } from './styles'
import { DefaultTheme } from 'react-native-paper'
import { addOnlyNumberDotsAndEmptyStrings } from '@/shared/helpers'



//TODO: A moeda a ser escolhida, será a que for selecionada no modal. Mas como temos pressa no SWAP, vamos fazer com moedas fixas
export const SwapCrypto = () => {
    const {
        handleSendTransaction,
        loading
    } = useSwapHook()

    const {
        currentCryptoToSend,
        setCurrentCryptoToSend,
        currentCryptoToReceived,
        setCurrentCryptoToReceived,
        handleCryptoBeforeSend
    } = useContext(SwapCryptoContext)

    return (
        <Container>
            <Content>
                <Title>Exchange crypto</Title>

                <InputCrypto
                    label='You send'
                    value={currentCryptoToSend.amount}
                    onChangeText={(value) => setCurrentCryptoToSend({ ...currentCryptoToSend, amount: addOnlyNumberDotsAndEmptyStrings(value, currentCryptoToSend.amount || "") })}

                    keyboardType="numeric"

                    cryptoSelected={currentCryptoToSend.ticker}
                    disabled={false}

                    onEndEditing={() => handleCryptoBeforeSend(currentCryptoToSend.amount?.toString() || "")}
                    theme={DefaultTheme}
                />
                <SpaceBetweenInputs />
                <InputCrypto
                    label='You get'
                    value={currentCryptoToReceived.amount || ""}
                    onChangeText={(value) => setCurrentCryptoToReceived({ ...currentCryptoToReceived, amount: value })}
                    cryptoSelected={currentCryptoToReceived.ticker}
                    disabled={true}
                    theme={DefaultTheme}
                />
            </Content>

            <ButtonExchange
                mode="contained"
                onPress={handleSendTransaction}
                loading={loading}
                disabled={loading}
            >
                {loading ? "Loading..." : "Exchange"}
            </ButtonExchange>
        </Container>
    )
}
