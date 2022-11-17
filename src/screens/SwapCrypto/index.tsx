
import { useState, useContext } from 'react'

import { InputCrypto } from '@/components'

import { SwapCryptoContext } from '@/context'

import { ButtonExchange, Container, Content, Title } from './styles'

//TODO: A moeda a ser escolhida, será a que for selecionada no modal. Mas como temos pressa no SWAP, vamos fazer com moedas fixas
export const SwapCrypto = () => {
    const [cryptoToSend, setCryptoToSend] = useState("")
    //TODO: Alterar para o retornado pela API - Esse dado é estático, não pode ser alterado pelo usuário
    const [cryptoToReceive, setCryptoToReceive] = useState("")

    const { meuNome } = useContext(SwapCryptoContext)

    console.log('meuNome :>> ', meuNome);


    return (
        <Container>
            <Content>
                <Title>Exchange crypto</Title>

                <InputCrypto
                    label='You send'
                    text={cryptoToSend}
                    setText={setCryptoToSend}
                    cryptoSelected="ETH"
                    style={{ marginBottom: 20 }}
                />

                <InputCrypto
                    label='You get'
                    text={cryptoToReceive}
                    setText={setCryptoToReceive}
                    cryptoSelected="BAT"
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
