import React from "react";

import {
    ContainerHistoryCard,
    Category,
    Amount
} from './styles';

interface IHistoryCard {
    category: string;
    color: string;
    amount: string
}

export const HistoryCard = ({ category, color, amount }: IHistoryCard) => {
    return (
        <ContainerHistoryCard color={color}>
            <Category>
                {category}
            </Category>
            <Amount>
                {amount}
            </Amount>
        </ContainerHistoryCard>
    )
}