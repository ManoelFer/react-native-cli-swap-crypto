import styled from 'styled-components/native'

import { Button } from 'react-native-paper'

export const Container = styled.SafeAreaView`
    display: flex;
    flex: 1;

    padding: 30px;
`

export const Content = styled.ScrollView`
    display: flex;
    flex: 1;

    flex-direction: column;
`

export const ChaptersTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8%;
`
export const ChaptersText = styled.Text`
    display: flex;
    text-align: justify;
    font-size: 16px;
`
export const SeparationLine = styled.View`
    width: 100%;
    height: 2px;
    background-color: #d0d0d0;
    margin-bottom: 5%;
    margin-top: 5%;
`

export const ButtonExchange = styled(Button)`
    background-color: #25b7eb;
    color: #d0d0d0;

    border-radius: 5px;
`
