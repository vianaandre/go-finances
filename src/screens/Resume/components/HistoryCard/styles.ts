import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IContainerHistoryCard {
    color: string
}

export const ContainerHistoryCard = styled.View<IContainerHistoryCard>`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: ${RFValue(14)}px ${RFValue(24)}px;
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: ${RFValue(5)}px;
    margin-top: ${RFValue(8)}px;
    border-left-width: 5px;
    border-left-color: ${({ color }) => color};
`;
export const Category = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};
`;
export const Amount = styled.Text`
    font-size: ${RFValue(16)}px;
    font-weight: 400;
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.title};
`;