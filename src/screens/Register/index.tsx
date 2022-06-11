import React, { useState } from 'react';
import { Modal, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useForm } from 'react-hook-form'
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { CategoryItems } from 'screens/CategoryItems';
import {
    ContainerRegister,
    Form,
    Fields,
    TransactionTypes
} from './styles';
import { InputForm } from 'components/Form/InputForm';
import { CategorySelect } from 'components/Form/CategorySelect';
import { Button } from 'components/Form/Button';
import { TransactionType } from 'components/Form/TransactionType';
import { Header } from 'components/Header';
import { settings } from 'utils/settings';

type NavigationProps = {
    navigate:(screen:string) => void;
}

interface IData {
    [name: string]: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Insirá um valor valido para o campo de Nome.'),
    amount: Yup
        .number()
        .typeError('Insirá um valor do tipo numérico.')
        .positive('Insirá um valor positivo.')
        .required('Insirá um valor valido para o campo de Preço.')
})

export const Register = () => {
    const [ transactionType, setTransactionType ] = useState<string>('')
    const [ isShowModal, setIsShowModal ] = useState(false)
    const [ isCategory, setIsCategory ] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const navigation = useNavigation<NavigationProps>();
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    async function handleSubmitForm(form: IData) {
        if(!transactionType)
            return Alert.alert('Selecione um tipo de transação.')
        if(isCategory.key === 'category')
            return Alert.alert('Selecione uma categória.')

        const data = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            transactionType,
            isCategory: isCategory.key,
            date: new Date(),
        }

        try {
            const getDataUser = await AsyncStorage.getItem(settings.dataKeyAsyncStorage);

            if(!getDataUser) await AsyncStorage.setItem(settings.dataKeyAsyncStorage, JSON.stringify([ data ]));
            if(getDataUser) await AsyncStorage.setItem(settings.dataKeyAsyncStorage, JSON.stringify([ ...JSON.parse(getDataUser!), data ]));


            reset();
            setTransactionType('');
            setIsCategory({
                key: 'category',
                name: 'Categoria',
            });

            navigation.navigate('Listagem');
        } catch(error) {
            console.error('screen:Register\nmetódo:HandleRegister\nerror', error);
            Alert.alert('Não foi possível salvar!')
        }
    }
    const onSubmit = handleSubmit((data: IData) => handleSubmitForm(data));

    const handleCloseModal = () => {
        setIsShowModal(false)
    }
    const handleOpenModal = () => {
        setIsShowModal(true)
    }
    const handleTransactionType = (type: 'up' | 'down') => {
        setTransactionType(type)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ContainerRegister>
                <Header title='Cadastro' />
                <Form>
                    <Fields>
                        <InputForm
                            control={control}
                            name="name"
                            placeholder='Nome'
                            autoCapitalize='words'
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />
                        <InputForm
                            control={control}
                            name="amount"
                            placeholder='Preço'
                            keyboardType='numeric'
                            error={errors.amount && errors.amount.message}
                        />
                        <TransactionTypes>
                            <TransactionType
                                type="up"
                                title="Income"
                                isActive={transactionType === 'up'}
                                onPress={() => handleTransactionType('up')}
                                activeOpacity={0.8}
                            />
                            <TransactionType
                                type="down"
                                title="Outcome"
                                isActive={transactionType === 'down'}
                                onPress={() => handleTransactionType('down')}
                                activeOpacity={0.8}
                            />
                        </TransactionTypes>

                        <CategorySelect title={isCategory.name} onPress={handleOpenModal} />
                    </Fields>

                    <Button title="Enviar" activeOpacity={0.8} onPress={() => onSubmit()} />
                </Form>

                <Modal visible={isShowModal}>
                    <CategoryItems
                        category={isCategory}
                        setCategoryItem={setIsCategory}
                        closeCategoryItems={handleCloseModal}
                    />
                </Modal>
            </ContainerRegister>
        </TouchableWithoutFeedback>
    )
}