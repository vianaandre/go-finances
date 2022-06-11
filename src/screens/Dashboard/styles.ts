import styled from 'styled-components/native'
import { AnyStyledComponent } from "styled-components";
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { FlatList, FlatListProps } from 'react-native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { BorderlessButton } from 'react-native-gesture-handler'

import { ITransaction } from 'global/interface/ITransaction';

export const ContainerView = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`
export const Header = styled.View`
    height: ${RFPercentage(40)};
    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: flex-start;
    padding-top: ${getStatusBarHeight() + RFValue(28)}px;
`

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;

    border-radius: ${RFValue(4)}px;
`

export const User = styled.View`
    margin-left: ${RFValue(16)}px;
`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Greeting = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
`

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`

export const Button = styled(BorderlessButton)``;

export const Icon = styled(Feather as unknown as AnyStyledComponent)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`
export const ContainerHighLight = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    position: absolute;
    top: ${RFPercentage(20)}px;
`
export const ContainerTransactions = styled.View`
    flex: 1;
    margin-top: ${RFPercentage(12)}px;
    padding: 0 ${RFValue(24)}px;
`
export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: ${RFValue(16)}px;
`
export const TransactionList = styled(
    FlatList as new (props: FlatListProps<ITransaction>) => FlatList<ITransaction>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})``
export const ContainerLoad = styled.View`
    flex: 1;
    justify-content: center;
`