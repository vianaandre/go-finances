import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { AnyStyledComponent } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

interface ITitle {
    active: boolean
}

export const ContainerCategorySelect = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${RFValue(18)}px ${RFValue(16)}px;
    margin-top: ${RFValue(16)}px;

    background-color: ${({ theme }) => theme.colors.shape};

    border-radius: 5px;
`;
export const Title = styled.Text<ITitle>`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.text};
`;
export const Icon = styled(Feather as unknown as AnyStyledComponent)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;