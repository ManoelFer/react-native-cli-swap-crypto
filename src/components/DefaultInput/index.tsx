import { TextInputProps } from 'react-native-paper';

import { TextInputStyled } from './styles'

export const DefaultInput = (props: TextInputProps) => {
    return (
        <TextInputStyled
            underlineColor="transparent"
            activeUnderlineColor="#2f2f2f"
            placeholderTextColor="#2f2f2f"
            underlineColorAndroid="#f5f5f5"
            {...props}
        />
    )
}
