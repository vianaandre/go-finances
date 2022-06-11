import React from "react";

import {
    ContainerTransactionCard,
    Header,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryTitle,
    Date
} from "./styles";
import { settings } from 'utils/settings';
import { ITransaction } from 'global/interface/ITransaction';

type Category = {
    name: string;
    icon: string;
    color: string;
    key: string
}

interface ITransactionCard {
    data: ITransaction
}

export const TransactionCard = ({ data }: ITransactionCard) => {
    const categoryItem = (category: string) => {
        return settings.categories.find((item: any) => item.key === category) as Category;
    }

    return (
        <ContainerTransactionCard>
            <Header>
                <Title>
                    {data.name}
                </Title>
                <Amount type={data.transactionType}>
                    {data.transactionType === 'down' && '- '}
                    {data.amount}
                </Amount>
            </Header>
            <Footer>
                <Category>
                    <Icon name={categoryItem(data.isCategory).icon} color={categoryItem(data.isCategory).color} />
                    <CategoryTitle>
                        {categoryItem(data.isCategory).name}
                    </CategoryTitle>
                </Category>
                <Date>
                    {data.date}
                </Date>
            </Footer>
        </ContainerTransactionCard>
    )
}