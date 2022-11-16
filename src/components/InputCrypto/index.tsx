import { ModalSelectCrypto } from "./ModalSelectCrypto"

import { IInputProps } from "./interfaces"

import { AroundInput, Container, TextInputStyled, VerticalLine } from "./styles"

export const InputCrypto = ({ label, text, setText, cryptoSelected, style }: IInputProps) => {
    return (
        <Container style={style}>

            <AroundInput>
                <TextInputStyled
                    label={label}
                    value={text}
                    onChangeText={text => setText(text)}

                    underlineColor="transparent"
                    activeUnderlineColor="#2f2f2f"

                    placeholderTextColor="#2f2f2f"
                    textColor="#2f2f2f"

                    underlineColorAndroid="#f5f5f5"
                />
                <VerticalLine />
                <ModalSelectCrypto cryptoSelected={cryptoSelected} />
            </AroundInput>

        </Container>

    )
}
