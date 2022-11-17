import { ModalSelectCrypto } from "./ModalSelectCrypto"

import { addOnlyNumberDotsAndEmptyStrings } from "@/shared/helpers"

import { IInputProps } from "./interfaces"

import { AroundInput, Container, TextInputStyled, VerticalLine } from "./styles"


export const InputCrypto = ({ label, amountSend, setAmountSend, cryptoSelected, disabled, onEndEditing, style }: IInputProps) => {

    return (
        <Container style={style}>

            <AroundInput>
                <TextInputStyled
                    label={label}
                    value={amountSend}
                    onChangeText={value => setAmountSend(addOnlyNumberDotsAndEmptyStrings(value, amountSend))}

                    keyboardType="numeric"

                    underlineColor="transparent"
                    activeUnderlineColor="#2f2f2f"
                    placeholderTextColor="#2f2f2f"
                    underlineColorAndroid="#f5f5f5"
                    onEndEditing={onEndEditing}
                    disabled={disabled}
                />
                <VerticalLine />
                <ModalSelectCrypto cryptoSelected={cryptoSelected} />
            </AroundInput>

        </Container>

    )
}
