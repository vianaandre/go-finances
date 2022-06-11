import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import {
    ContainerView,
    Header,
    UserWrapper,
    Photo,
    User,
    UserInfo,
    Greeting,
    Name,
    Icon,
    ContainerHighLight,
    ContainerTransactions,
    Title,
    TransactionList,
    Button,
    ContainerLoad
} from './styles';
import { TransactionCard } from './components/TransactionCard';
import { HightLight } from './components/HightLight';
import { settings } from 'utils/settings';
import { ITransaction } from 'global/interface/ITransaction';

type Transaction = {
    amount: string;
    date: string;
}

interface ITransactionTotal {
    inputMoney: Transaction;
    outputMoney: Transaction;
    total: Transaction
}

export const Dashboard = () => {
    const [ isTransactionList, setIsTransactionList ] = useState([] as ITransaction[]);
    const [ isTransactionTotal, setIsTransactionTotal ] = useState({}  as ITransactionTotal);
    const [ isLoading, setIsloading ] = useState(true as boolean);
    const theme = useTheme();

    const handleDateFormatTransactions = useCallback((transactions: ITransaction[], type: 'down' | 'up' | 'total') => {
        let lastDate
        if(type === 'down' || type === 'up') {
            const filterDatePerType = transactions.filter(item => item.transactionType === type).map((item: ITransaction) => new Date(item.date).getTime());

            lastDate = new Date(Math.max.apply(Math, filterDatePerType));

            return `Última entrada dia ${lastDate.getDate()} de ${Intl.DateTimeFormat('pt-BR', {
                month: 'long',
            }).format(new Date(lastDate))}`
        }

        const filterDateTotal = transactions.map(item => new Date(item.date).getTime());
        lastDate = new Date(Math.max.apply(Math, filterDateTotal));

        return `01 á ${lastDate.getDate()} de ${Intl.DateTimeFormat('pt-BR', {
            month: 'long',
        }).format(new Date(lastDate))}`
    }, [])

    const handleLoadTransactions = useCallback((transactions: ITransaction[]) => {
        let inputMoney = 0;
        let outputMoney = 0;

        transactions.forEach(item => {
            if(item.transactionType === 'up') inputMoney += Number(item.amount)
            if(item.transactionType === 'down') outputMoney += Number(item.amount)
        })

        setIsTransactionTotal({
            inputMoney: {
                amount: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(inputMoney)),
                date: handleDateFormatTransactions(transactions, 'up')
            },
            outputMoney: {
                amount: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(outputMoney)),
                date: handleDateFormatTransactions(transactions, 'down')
            },
            total: {
                amount: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(inputMoney - outputMoney)),
                date: handleDateFormatTransactions(transactions, 'total')
            }
        })
    }, [])

    const handleLoadListTransactions = async () => {
        const getDataUser = await AsyncStorage.getItem(settings.dataKeyAsyncStorage);
        const jsonParseDataUser = getDataUser ? JSON.parse(getDataUser) : [];

        const dataFormatted: ITransaction[] = jsonParseDataUser.map((item :ITransaction): ITransaction => {
            const amountFormatted = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(item.amount));
            const date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
            }).format(new Date(item.date));

            return {
                amount: amountFormatted,
                date,
                id: item.id,
                name: item.name,
                isCategory: item.isCategory,
                transactionType: item.transactionType
            }
        });

        handleLoadTransactions(jsonParseDataUser);
        setIsTransactionList(dataFormatted.reverse());

        setIsloading(false);
    };

    useFocusEffect(useCallback(() => {
        handleLoadListTransactions();
    }, []));

    return (
        <ContainerView>
            {isLoading ?
                (
                    <ContainerLoad>
                        <ActivityIndicator color={theme.colors.primary} size="large" />
                    </ContainerLoad>
                )
                :
                (
                    <>
                        <Header>
                            <UserWrapper>
                                <UserInfo>
                                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/67127843?v=4' }} />
                                    <User>
                                        <Greeting>
                                            Olá
                                        </Greeting>
                                        <Name>
                                            André
                                        </Name>
                                    </User>
                                </UserInfo>
                                <Button>
                                    <Icon name="power" />
                                </Button>
                            </UserWrapper>
                        </Header>
                        <ContainerHighLight contentContainerStyle={{ paddingEnd: 12 }}>
                            <HightLight title="Entradas" amount={isTransactionTotal.inputMoney.amount} lastTransaction={isTransactionTotal.inputMoney.date} type="up" />
                            <HightLight title="Saídas" amount={isTransactionTotal.outputMoney.amount} lastTransaction={isTransactionTotal.outputMoney.date} type="down" />
                            <HightLight title="Total" amount={isTransactionTotal.total.amount} lastTransaction={isTransactionTotal.total.date} type="total" />
                        </ContainerHighLight>
                        <ContainerTransactions>
                            <Title>Listagem</Title>

                            <TransactionList
                                data={isTransactionList}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => <TransactionCard data={item} />}
                            />
                        </ContainerTransactions>
                    </>
                )}
        </ContainerView>
    )
}