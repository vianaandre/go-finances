import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { AnyStyledComponent } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerTransactionCard = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 4px;
    padding: ${RFValue(17)}px ${RFValue(24)}px;
    margin-bottom: ${RFValue(16)}px;
`;
export const Header = styled.View``;
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
`;
export const Amount = styled.Text<{
    type: 'down' | 'up';
}>`
    margin-top: 2px;
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => type === 'down' ? theme.colors.attention : theme.colors.success};
`;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(20)}px;;
`;
export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const Icon = styled(Feather as unknown as AnyStyledComponent)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;
export const CategoryTitle = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    margin-left: ${RFValue(10)}px;
`;
export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`;