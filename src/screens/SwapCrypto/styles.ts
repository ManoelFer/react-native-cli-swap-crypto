import styled from "styled-components/native";

import { Button } from 'react-native-paper';


export const Container = styled.SafeAreaView`
    flex: 1;
    display: flex;

    background-color: #F8F9FA;
    justify-content: center;
    align-items: center;
`

export const Content = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2%;
`

export const Title = styled.Text`
    margin-bottom: 10%;
    font-weight: bold;
`

export const ButtonExchange = styled(Button)`
    background-color: #25b7eb;
    color: #d0d0d0;

    border-radius: 5px;
`