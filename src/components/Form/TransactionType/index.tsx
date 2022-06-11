import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler'

import {
    ContainerTransactionType,
    Icon,
    Title,
 } from './styles'

interface ITransactionType extends RectButtonProps {
    title: string;
    type: 'up' | 'down';
    isActive: boolean
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

export const TransactionType = ({ title, type, isActive, ...rest }: ITransactionType) => {
    return (
        <ContainerTransactionType {...rest} type={type} isActive={isActive} activeOpacity={0.9}>
            <Icon name={icon[type]} type={type} />
            <Title>
                {title}
            </Title>
        </ContainerTransactionType>
    )
}