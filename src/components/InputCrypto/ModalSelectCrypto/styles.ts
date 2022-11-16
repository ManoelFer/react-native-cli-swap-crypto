import styled from "styled-components/native";

export const Container = styled.View`
`

export const ModalContainer = styled.SafeAreaView`
    flex: 1;
    background-color: black;
    opacity: 0.8;
`

export const ModalContent = styled.View`
    flex: 1;
    display: flex;
    
    align-items: center;

    background-color: black;
    opacity: 0.8;
`

export const HeaderModal = styled.View`
    width: 100%;
    display: flex;
    
    align-items: flex-end;

    padding: 10px;
    margin-bottom: 50px;
`

export const ButtonClose = styled.Pressable`
`

export const TitleModal = styled.Text`
    color: #d0d0d0;
    font-weight: bold;
`

export const Button = styled.Pressable`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    padding: 0 10px;

    background-color: #d0d0d0;
    height: 64px;
    min-width: 65px;
    
`

export const TextButton = styled.Text`
    color: #2f2f2f;
`

export const List = styled.FlatList`
`