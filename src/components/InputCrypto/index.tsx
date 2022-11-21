import { IInputProps } from "./interfaces"

import { DefaultInput } from "../DefaultInput"
import { ModalSelectCrypto } from "./ModalSelectCrypto"

import { AroundInput, Container, VerticalLine } from "./styles"

export const InputCrypto = (props: IInputProps) => {
    const { cryptoSelected, label } = props

    return (
        <Container>
            <AroundInput>
                <DefaultInput {...props} />
                <VerticalLine />
                <ModalSelectCrypto cryptoSelected={cryptoSelected} isToSend={label === "You send" ? true : false} />
            </AroundInput>
        </Container>

    )
}
