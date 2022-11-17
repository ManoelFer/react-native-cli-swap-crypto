import { useState, useEffect } from "react";
import { Modal, Alert, ListRenderItem } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import { compatibleCurrencies } from "@/shared/services/SwapzoneEndpoints";
import { IReturnCurrencies } from "@/shared/services/SwapzoneEndpoints/compatibleCurrencies/interfaces";

import { IModalProps } from "./interfaces";

import { Button, ButtonClose, Container, HeaderModal, List, ModalContainer, ModalContent, TextButton, TitleModal } from "./styles"

export const ModalSelectCrypto = ({ cryptoSelected }: IModalProps) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [cryptosList, setCryptosList] = useState<IReturnCurrencies[]>();

    useEffect(() => {
        async function loadCurrencies() {
            try {
                const cryptosEnabled = await compatibleCurrencies()

                setCryptosList(cryptosEnabled)
            } catch (error) {
                Alert.alert("error in get cryptos list")
            }
        }

        loadCurrencies()
    }, [])


    const renderCryptos: ListRenderItem<IReturnCurrencies> = ({ item }) => (
        <TitleModal>
            {item?.name}
        </TitleModal>
    );


    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <ModalContainer>

                    <ModalContent >
                        <HeaderModal>
                            <ButtonClose
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name="close" size={30} color="#d0d0d0" />
                            </ButtonClose>
                        </HeaderModal>

                        <TitleModal>Choose source Criptocurrency</TitleModal>

                        <List
                            data={cryptosList}
                            keyExtractor={(_crypto, index) => index.toString()}
                            //@ts-ignore 
                            renderItem={renderCryptos}
                        />

                    </ModalContent>
                </ModalContainer>
            </Modal>
            <Button
                onPress={() => setModalVisible(true)}
            >
                <TextButton>{cryptoSelected}</TextButton>
            </Button>
        </Container >
    )
}

