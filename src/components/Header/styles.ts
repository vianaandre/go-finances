import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerHeader = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;

    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
    padding-bottom: ${RFValue(19)}px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
`;