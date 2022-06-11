import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const ContainerRegister = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
    width: 100%;
`;
export const Form = styled.View`
    flex: 1;
    justify-content: space-between;

    padding: ${RFValue(24)}px;
    padding-top: ${RFValue(16)}px;
`
export const Fields = styled.View``
export const TransactionTypes = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${RFValue(16)}px;
`