import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    GetCategoryPayload,
    ItemCategories,
    SelectCategoryEditablePayload,
} from '../../types/categories';

interface CategorySlice {
    categories: ItemCategories[];
    selectedCategory: ItemCategories;
}

const initialState: CategorySlice = {
    categories: [],
    selectedCategory: {
        id: 0,
        name: '',
        description: '',
        subcategories: []
    },
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories(_state, _action: PayloadAction<GetCategoryPayload>) {},// middleware
        setCategories(state, action: PayloadAction<ItemCategories[]>) {
            state.categories = action.payload;
        },
        setSelectedCategory(state, action: PayloadAction<SelectCategoryEditablePayload>) {
            state.selectedCategory = action.payload;
        },
    },
});

export const { getCategories, setCategories, setSelectedCategory } =
    categoriesSlice.actions;

export default categoriesSlice.reducer;
