import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

export const ContainerButton = styled(RectButton)`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: center;

    padding: ${RFValue(18)}px 0;

    border-radius: 4px;
`
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape}
`