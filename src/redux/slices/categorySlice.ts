import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../types/categories';
import { Dispatch, SetStateAction } from 'react';

interface CategorySlice {
    categories: Category[];
    isLoading: boolean;
    selectedCategory: Category | null;
}

const initialState: CategorySlice = {
    categories: [],
    isLoading: false,
    selectedCategory: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories(_state, _action: PayloadAction<{path: string, setIsLoading: Dispatch<SetStateAction<boolean>>}>) {}, //middleware
        setCategories(state, action: PayloadAction<Category[]>) {
            state.categories = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setSelectedCategory(state, action: PayloadAction<Category | null>) {
            state.selectedCategory = action.payload;
        },
    },
});

export const { getCategories, setCategories, setLoading, setSelectedCategory } =
    categoriesSlice.actions;

export default categoriesSlice.reducer;
