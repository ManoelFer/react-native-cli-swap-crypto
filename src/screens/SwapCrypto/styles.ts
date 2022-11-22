import styled from "styled-components/native";

import { Button } from 'react-native-paper';


export const Container = styled.SafeAreaView`
    flex: 1;
    display: flex;

    background-color: #F8F9FA;
    align-items: center;
`

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
`

export const Title = styled.Text`
    font-size: 20px;
    margin-bottom: 10%;
    font-weight: bold;
`

export const SpaceBetweenInputs = styled.View`
    height: 20px;
`

export const ButtonExchange = styled(Button)`
    background-color: #25b7eb;
    color: #d0d0d0;

    border-radius: 5px;
`

export const ReadmeTextLink = styled.Text`
    color: #25b7eb;
    margin-bottom: 10%;
    margin-top: 10%;
    font-weight: bold;
`

export const ContainerLottie = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 200px;
`