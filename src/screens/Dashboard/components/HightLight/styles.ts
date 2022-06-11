import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { AnyStyledComponent } from "styled-components";

interface IIconProps {
    type: 'up' | 'down' | 'total'
}

export const Container = styled.View<IIconProps>`
    background-color: ${({ type, theme }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};

    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;

    padding: ${RFValue(18)}px ${RFValue(24)}px;
    padding-bottom: ${RFValue(42)}px;

    border-radius: 8px;
    margin-left: ${RFValue(12)}px;

    display: flex;
    justify-content: space-between;
`
export const Header = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`
export const Title = styled.Text<IIconProps>`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-weight: 400;

    color: ${({ type, theme }) => type === 'total' ? theme.colors.shape : theme.colors.title}
`
export const Icon = styled(Feather as unknown as AnyStyledComponent)<IIconProps>`
    ${(props) => props.type === 'up' && css`color: ${({ theme }) => theme.colors.success}`}
    ${(props) => props.type === 'down' && css`color: ${({ theme }) => theme.colors.attention}`}
    ${(props) => props.type === 'total' && css`color: ${({ theme }) => theme.colors.shape}`}
    font-size: ${RFValue(40)};
`
export const Content = styled.View``
export const Amount  = styled.Text<IIconProps>`
    font-size: ${RFValue(32)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    color: ${({ type, theme }) => type === 'total' ? theme.colors.shape : theme.colors.title};

    margin-bottom: ${RFValue(2)}px;
`
export const LastTransaction = styled.Text<IIconProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.regular};

    color: ${({ type, theme }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`