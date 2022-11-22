import { Content, Container, ChaptersTitle, ChaptersText, SeparationLine, ButtonExchange } from './styles'

export const AboutSwap = () => {
    return (
        <Container>
            <Content>
                <ChaptersTitle>Which API do we use?</ChaptersTitle>
                <ChaptersText>
                    We use the api of the Swapzone to search the better service to exchange your cryptocurrencies!
                </ChaptersText>

                <SeparationLine />

                <ChaptersTitle>Why do I get an error when clicking the exchange button?</ChaptersTitle>
                <ChaptersText>
                    To exchange your cryptocurrencies, the service need get a tax, if you send a value less than
                    the allowed, the service fail. Errors can also happen if the connected wallet does not support the cryptocurrency selected for exchange.

                </ChaptersText>

                <SeparationLine />

                <ChaptersTitle>After how long will the exchange be completed?</ChaptersTitle>
                <ChaptersText>
                    The time will be vary between 30 and 60 seconds! This will go depends on the congestion of the blockchain network. But not worry,
                    we extorted the value if something fail.
                </ChaptersText>
            </Content>

            <ButtonExchange mode="contained">
                BACK TO SWAP
            </ButtonExchange>
        </Container>
    )
}
