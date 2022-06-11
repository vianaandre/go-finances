import React from "react";

import {
    ContainerHeader,
    Title
} from './styles';

interface IHeader {
    title: string;
}

export const Header = ({ title }: IHeader) => {
    return (
        <ContainerHeader>
            <Title>
                {title}
            </Title>
        </ContainerHeader>
    )
}