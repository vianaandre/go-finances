import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { VictoryPie } from 'victory-native';
import { useTheme } from 'styled-components';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { ActivityIndicator } from 'react-native';

import { Header } from 'components/Header';
import { HistoryCard } from './components/HistoryCard';
import { settings } from 'utils/settings';
import { ITransaction } from 'global/interface/ITransaction';
import {
    ContainerResume,
    ContainerHistory,
    ContainerChart,
    ContainerContent,
    MonthSelect,
    MonthSelectButton,
    SelectIcon,
    Month,
    ContainerLoad
} from './styles';

interface IIsCategories {
    color: string;
    name: string;
    category: string;
    amount: number;
    amountFormatted: string;
    percent: string;
}

export const Resume = () => {
    const [ isCategories, setIsCategories ] = useState([] as IIsCategories[]);
    const [ isSelectDate, setIsSelectDate ] = useState(new Date());
    const [ isLoading, setIsLoading ] = useState(false);
    const theme = useTheme();

    const handleChangeSelectDate = useCallback((type: 'prev' | 'next') => {
        if(type === 'next') {
            setIsSelectDate(addMonths(isSelectDate, 1))
        } else {
            setIsSelectDate(subMonths(isSelectDate, 1))
        }
    }, [isSelectDate])

    const handleFormattedCategory = useCallback((categories: ITransaction[]) => {
        const categoriesFormatted = [] as IIsCategories[];

        let someTotal = categories.reduce((previus, current) => {
            return previus += Number(current.amount)
        }, 0)
        categories.forEach(item => {
            const existCategory = categoriesFormatted.findIndex(({ category }) => item.isCategory === category);
            const nameFormtted = settings.categories.find(({ key }) => key === item.isCategory);

            if(existCategory !== -1) {
                categoriesFormatted[existCategory].amount += Number(item.amount)
                categoriesFormatted[existCategory].amountFormatted = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(categoriesFormatted[existCategory].amount)
                categoriesFormatted[existCategory].percent = `${(100 * categoriesFormatted[existCategory].amount / someTotal).toFixed(0)}%`
                return
            }
            categoriesFormatted.push({
                amount: Number(item.amount),
                amountFormatted: Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(item.amount)),
                category: item.isCategory,
                name: nameFormtted!.name,
                color: nameFormtted!.color,
                percent: `${(100 * Number(item.amount) / someTotal).toFixed(0)}%`
            })
        })

        setIsCategories(categoriesFormatted)
    }, [])

    const handleLoadCategories = useCallback(async () => {
        setIsLoading(true);
        const getTransactions = await AsyncStorage.getItem(settings.dataKeyAsyncStorage);
        const jsonParseTransactions = getTransactions ? JSON.parse(getTransactions) : [] as ITransaction[];

        const filterTypeDown = jsonParseTransactions.filter((item: ITransaction) =>
            item.transactionType === 'down' &&
            new Date(item.date).getMonth() === isSelectDate.getMonth() &&
            new Date(item.date).getFullYear() === isSelectDate.getFullYear()
        );

        handleFormattedCategory(filterTypeDown);

        setIsLoading(false)
    }, [isSelectDate])

    useFocusEffect(useCallback(() => {
        handleLoadCategories();
    }, [handleLoadCategories]));

    return (
        <ContainerResume>
            <Header title="Resumo por categoria" />

            <ContainerContent
                showsVerticalScrollIndicator={false}
                horizontal={false}
                contentContainerStyle={{
                    paddingBottom: getBottomSpace()
                }}
            >
                <MonthSelect>
                    <MonthSelectButton onPress={() => handleChangeSelectDate('prev')}>
                        <SelectIcon name="chevron-left" />
                    </MonthSelectButton>

                    <Month>
                        {format(isSelectDate, 'MMMM, yyyy', { locale: ptBR })}
                    </Month>

                    <MonthSelectButton onPress={() => handleChangeSelectDate('next')}>
                        <SelectIcon name="chevron-right" />
                    </MonthSelectButton>
                </MonthSelect>

                {isLoading ? (
                    <ContainerLoad>
                        <ActivityIndicator color={theme.colors.primary} size="large" />
                    </ContainerLoad>
                ) : (
                    <>
                        <ContainerChart>
                            <VictoryPie
                                data={isCategories}
                                colorScale={isCategories.map(item => item.color)}
                                style={{
                                    labels: {
                                        fontSize: RFValue(18),
                                        fontWeight: 'bold',
                                        fill: theme.colors.shape
                                    }
                                }}
                                labelRadius={80}
                                x="percent"
                                y="amount"
                            />
                        </ContainerChart>

                        <ContainerHistory>
                            {isCategories.length > 0 && (
                                isCategories.map(item => (
                                    <HistoryCard key={item.category} color={item.color} category={item.name} amount={item.amountFormatted} />
                                ))
                            )}
                        </ContainerHistory>
                    </>
                )}
            </ContainerContent>
        </ContainerResume>
    )
}