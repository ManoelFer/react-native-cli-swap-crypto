
import { useState } from 'react'

import { InputCrypto } from '../../components'

import { ButtonExchange, Container, Content, Title } from './styles'

export const SwapCrypto = () => {
    const [cryptoToSend, setCryptoToSend] = useState("")

    //TODO: Alterar para o retornado pela API - Esse dado é estático, não pode ser alterado pelo usuário
    const [cryptoToReceive, setCryptoToReceive] = useState("")


    return (
        <Container>
            <Content>
                <Title>Exchange crypto</Title>

                <InputCrypto
                    label='You send'
                    text={cryptoToSend}
                    setText={setCryptoToSend}
                    cryptoSelected="BTC"
                    style={{ marginBottom: 20 }}
                />

                <InputCrypto
                    label='You get'
                    text={cryptoToReceive}
                    setText={setCryptoToReceive}
                    cryptoSelected="ETH"
                    style={{ marginBottom: 40 }}
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
