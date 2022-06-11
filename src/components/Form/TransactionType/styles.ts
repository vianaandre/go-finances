import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { AnyStyledComponent } from 'styled-components'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

interface IIcons {
    type: 'up' | 'down'
}

interface IContainerTransactionType {
    type: 'up' | 'down';
    isActive: boolean
}

export const ContainerTransactionType = styled(RectButton)<IContainerTransactionType>`
    width: 49%;

    border-style: solid;
    border-width: ${({ isActive }) => isActive ? '0px' : '1px'};
    border-color: ${({ theme }) => theme.colors.text};
    border-radius: 4px;

    padding: ${RFValue(16)}px 0;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${({ type, isActive }) => isActive && type === 'up' && css`
        background-color: ${({ theme }) => theme.colors.success_light};
    `};
    ${({ type, isActive }) => isActive && type === 'down' && css`
        background-color: ${({ theme }) => theme.colors.attention_light};
    `};
`
export const Icon = styled(Feather as unknown as AnyStyledComponent)<IIcons>`
    font-size: ${RFValue(24)}px;
    margin-right: ${RFValue(11)}px;

    color: ${({ theme, type }) => type === 'up' ? theme.colors.success : theme.colors.attention};
`
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
`