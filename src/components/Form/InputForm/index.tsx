import React from 'react';

import { Input } from '../Input';
import { ContainerInputForm, Error } from './styles'
import { Controller, Control } from 'react-hook-form'
import { TextInputProps } from 'react-native';

interface IInputForm extends TextInputProps {
    control: Control;
    name: string;
    error?: string
}

export const InputForm = ({ name, control, error, ...rest }: IInputForm) => {
    return (
        <ContainerInputForm>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        {...rest}
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            {error && <Error>{error}</Error>}
        </ContainerInputForm>
    )
}
