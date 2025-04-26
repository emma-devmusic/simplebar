import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    GetCategoryPayload,
    ItemCategories,
} from '../../types/categories';

interface CategorySlice {
    categories: ItemCategories[]
}

const initialState: CategorySlice = {
    categories: []
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getCategories(_state, _action: PayloadAction<GetCategoryPayload>) { },// middleware
        setCategories(state, action: PayloadAction<ItemCategories[]>) {
            state.categories = action.payload;
        }
    },
});

export const { getCategories, setCategories } =
    categoriesSlice.actions;

export default categoriesSlice.reducer;
