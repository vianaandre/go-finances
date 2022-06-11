import React from "react";

import {
    ContainerCategorySelect,
    Title,
    Icon,
} from "./styles";

interface ICategorySelect {
    title: string;
    onPress: () => void;
}

export const CategorySelect = ({ title, onPress }: ICategorySelect) => {
    return (
        <ContainerCategorySelect onPress={onPress}>
            <Title active={title === 'Categoria' ? false : true}>
                {title}
            </Title>
            <Icon name="chevron-down" />
        </ContainerCategorySelect>
    )
}