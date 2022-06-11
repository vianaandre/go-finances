import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const ContainerResume = styled.View`
    flex: 1;
`;
export const ContainerHistory = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
`;
export const ContainerChart = styled.View`
    width: 100%;
    align-items: center;
`;
export const ContainerContent = styled.ScrollView``;
export const MonthSelect = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${RFValue(38)}px;
`;
export const MonthSelectButton = styled(BorderlessButton)``;
export const SelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`;
export const Month = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text_dark};
`;
export const ContainerLoad = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: ${RFPercentage(30)}px;
`
