import React from "react";
import { FlatList } from "react-native";

import { settings } from "utils/settings";

import {
    ContainerCategoryItems,
    Header,
    Title,
    Category,
    Icon,
    Label,
    ItemSeparator,
    Footer
} from './styles';
import { Button } from 'components/Form/Button';

interface ICategory {
    name: string;
    key: string;
}

interface ICategoryItems {
    category: ICategory;
    setCategoryItem: (item: ICategory) => void;
    closeCategoryItems: () => void;
}

export const CategoryItems = ({ category, setCategoryItem, closeCategoryItems }: ICategoryItems) => {
    const handleSelectCategory = (category: ICategory) => {
        setCategoryItem(category)
    }

    return (
        <ContainerCategoryItems>
            <Header>
                <Title>
                    Categorias
                </Title>
            </Header>

            <FlatList
                data={settings.categories}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <Category onPress={() => handleSelectCategory(item)} isActive={category.key === item.key}>
                        <Icon name={item.icon} />
                        <Label>{item.name}</Label>
                    </Category>
                )}
                ItemSeparatorComponent={() => (
                    <ItemSeparator />
                )}
            />

            <Footer>
                <Button title="Selecionar" onPress={closeCategoryItems} />
            </Footer>
        </ContainerCategoryItems>
    )
}