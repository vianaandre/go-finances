import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'
import { AnyStyledComponent } from 'styled-components'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

interface ICategory {
    isActive: boolean
}

export const ContainerCategoryItems = styled(GestureHandlerRootView)`
    flex: 1;
`;

export const Header = styled.View`
    height: ${RFValue(113)}px;

    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.TouchableOpacity<ICategory>`
    width: 100%;

    padding: ${RFValue(18)}px ${RFValue(16)}px;

    flex-direction: row;
    align-items: center;

    background-color: ${({ theme, isActive }) =>
        isActive ? theme.colors.secondary_light : 'transparent'
    };
`;

export const Icon = styled(Feather as unknown as AnyStyledComponent)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-right: ${RFValue(24)}px;
`;

export const Label = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const ItemSeparator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: ${RFValue(16)}px ${RFValue(18)}px;
    padding-bottom: ${getBottomSpace()}px
`;