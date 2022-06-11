import React from 'react'

import { TextInputProps } from 'react-native'
import { ContainerInput } from './styles'

export const Input = ({ ...rest }: TextInputProps) => {
    return (
        <ContainerInput {...rest} />
    )
}