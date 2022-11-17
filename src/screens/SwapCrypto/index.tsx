import { InputCrypto } from '@/components'

import { ButtonExchange, Container, Content, Title } from './styles'
import useSwapHook from './useSwapHook'

//TODO: A moeda a ser escolhida, será a que for selecionada no modal. Mas como temos pressa no SWAP, vamos fazer com moedas fixas
export const SwapCrypto = () => {
    const {
        cryptoToSend,
        setCryptoToSend,
        handleCryptoBeforeSend,
        cryptoToReceive,
        setCryptoToReceive
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
                onPress={() => console.log('Pressed')}
            >
                Exchange
            </ButtonExchange>
        </Container>
    )
}
