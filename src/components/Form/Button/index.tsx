import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler'

import {
    ContainerButton,
    Title,
} from './styles'

interface IButton extends RectButtonProps {
    title: string
}

export const Button = ({ title, ...rest }: IButton) => {
    return (
        <ContainerButton {...rest} activeOpacity={0.7}>
            <Title>
                {title}
            </Title>
        </ContainerButton>
    )
}