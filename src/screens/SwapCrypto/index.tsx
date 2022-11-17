import { InputCrypto } from '@/components'

import useSwapHook from './useSwapHook'

import { ButtonExchange, Container, Content, Title } from './styles'


//TODO: A moeda a ser escolhida, será a que for selecionada no modal. Mas como temos pressa no SWAP, vamos fazer com moedas fixas
export const SwapCrypto = () => {
    const {
        cryptoToSend,
        setCryptoToSend,
        handleCryptoBeforeSend,
        cryptoToReceive,
        setCryptoToReceive,
        handleSendTransaction,
        loading
    } = useSwapHook()

    return (
        <Container>
            <Content>
                <Title>Exchange crypto</Title>

                <InputCrypto
                    label='You send'
                    amountSend={cryptoToSend}
                    setAmountSend={setCryptoToSend}
                    cryptoSelected="ETH"
                    style={{ marginBottom: 20 }}
                    disabled={false}
                    onEndEditing={() => handleCryptoBeforeSend(cryptoToSend)}
                />

                <InputCrypto
                    label='You get'
                    amountSend={cryptoToReceive}
                    setAmountSend={setCryptoToReceive}
                    cryptoSelected="BAT"
                    style={{ marginBottom: 40 }}
                    disabled={true}
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
