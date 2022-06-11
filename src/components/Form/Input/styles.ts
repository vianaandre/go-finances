import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ContainerInput = styled(TextInput)`
    width: 100%;

    padding: ${RFValue(18)}px ${RFValue(16)}px;
    margin-top: ${RFValue(8)}px;

    background-color: ${({ theme }) => theme.colors.shape};

    border-radius: 4px;

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`