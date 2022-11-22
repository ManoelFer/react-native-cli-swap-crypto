import styled from 'styled-components/native'

import { Button } from 'react-native-paper'

export const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;
`

export const Content = styled.View`
    display: flex;
    flex: 1;

    justify-content: center;
    align-items: center;

    flex-direction: column;
    
    padding: 30px;
`

export const ContainerLottie = styled.View`
    width: 200px;
    height: 200px;
`

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #101010;
    margin-top: 5%;
`

export const Text = styled.Text`
    font-size: 14px;
    color: #101010;
    margin-top: 20px;
`

export const HighlightedText = styled.Text`
    color: #25b7eb;
    font-weight: bold;
`


export const ButtonExchange = styled(Button)`
    background-color: #25b7eb;
    color: #d0d0d0;

    border-radius: 5px;
    margin-top: 20%;
`

