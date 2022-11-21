import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    display: flex;
    flex-direction: row;
    
    justify-content: center;
    align-items: center;
`

export const AroundInput = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;

    width: 100%;

    background-color: #d0d0d0;
`

export const VerticalLine = styled.View`
    width: 2px;
    height: 50px;
    background-color: #2f2f2f;
`