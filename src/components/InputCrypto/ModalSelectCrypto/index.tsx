import { Modal, ListRenderItem } from "react-native";
import { DefaultTheme } from "react-native-paper";

import Icon from 'react-native-vector-icons/FontAwesome';

import { IReturnCurrencies } from "@/shared/services/SwapzoneEndpoints/compatibleCurrencies/interfaces";

import { IModalProps } from "./interfaces";

import { Button, ButtonClose, CardCrypto, Container, HeaderModal, List, ModalContainer, ModalContent, TextButton, TextCardCrypto, TitleModal } from "./styles"
import { DefaultInput } from "@/components/DefaultInput";

import useModalHook from "./useModalHook";

export const ModalSelectCrypto = ({ cryptoSelected, isToSend }: IModalProps) => {
    const { modalVisible, setModalVisible, handleCloseModal, cryptosList, filteredList, selectedCrypto, handleSearchCurrency, currentSearchCurrency } = useModalHook()

    const renderCryptos: ListRenderItem<IReturnCurrencies> = ({ item }) => (
        <CardCrypto key={item.ticker} onPress={() => { selectedCrypto(isToSend, item) }}>
            <TextCardCrypto >
                Crypto: {item?.name}{'\n'}{'\n'}
                Network: {item?.network}
            </TextCardCrypto>
            <Icon name="database" size={20} color="#d0d0d0" />
        </CardCrypto>

    )

    return (
        <Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <ModalContainer>
                    <ModalContent >
                        <HeaderModal>
                            <ButtonClose
                                onPress={() => handleCloseModal()}>
                                <Icon name="close" size={30} color="#d0d0d0" />
                            </ButtonClose>
                        </HeaderModal>

                        <TitleModal>Choose {isToSend ? "cryptocurrency to send" : "cryptocurrency to receive"}</TitleModal>

                        <DefaultInput
                            label="Search currency by crypto name"
                            value={currentSearchCurrency}
                            onChangeText={(value) => handleSearchCurrency(value)}
                            theme={DefaultTheme}
                        />

                        <List
                            data={filteredList?.length > 0 && filteredList[0].name !== "" ? filteredList : cryptosList}
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

