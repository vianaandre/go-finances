import React from 'react'

import {
    Container,
    Header,
    Title,
    Icon,
    Content,
    Amount,
    LastTransaction
} from './styles'

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

interface IHightLight {
    title: string;
    amount: string;
    lastTransaction: string;
    type: 'up' | 'down' | 'total'
}

export const HightLight = ({ title, amount, lastTransaction, type }: IHightLight) => {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title>
                <Icon name={icon[type]} type={type} />
            </Header>
            <Content>
                <Amount type={type}>
                    {type === 'down' && '- '}
                   {amount}
                </Amount>
                <LastTransaction type={type}>
                    {lastTransaction}
                </LastTransaction>
            </Content>
        </Container>
    )
}