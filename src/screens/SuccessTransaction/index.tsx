
import Lottie from 'lottie-react-native';

import { exchangeLottie, successLottie } from '@/assets'

import { Container, ContainerLottie, Content, Title, Text, HighlightedText, ButtonExchange } from "./styles"


export const SuccessTransaction = () => {
    return (
        <Container>
            <Lottie source={successLottie} autoPlay loop />
            <Content>
                <ContainerLottie>
                    <Lottie source={exchangeLottie} autoPlay loop />
                </ContainerLottie>

                <Title>Transaction sent successfully!</Title>

                <Text>
                    Your coin has been sent for exchange, this process can take about <HighlightedText>30 to 60 minutes</HighlightedText>, please wait.
                </Text>

                <ButtonExchange
                    mode="contained"
                >
                    Back to Swap
                </ButtonExchange>
            </Content>
        </Container>
    )
}
