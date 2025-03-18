import { Dispatch, MiddlewareAPI, PayloadAction } from '@reduxjs/toolkit';
import {
    setCategories,
    setLoading,
    setSelectedCategory,
} from '../slices/categorySlice';
import { fetchData } from '../../services/fetchData';
import { CategoryDataSearchResponse } from '../../types/categories';
import { ResponseApiDing } from '../../types/api';
import { SetStateAction } from 'react';

export const categoriesMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<unknown>) => {
        next(action);
        if (action.type === 'categories/getCategories') {
            const { path, setIsLoading } = action.payload as {
                path: string;
                setIsLoading: React.Dispatch<SetStateAction<boolean>>;
            };
            try {
                setLoading(true);
                const response: ResponseApiDing<CategoryDataSearchResponse> =
                    await fetchData(path, 'GET', null);
                state.dispatch(setCategories(response.data.items));
                state.dispatch(setSelectedCategory(response.data.items[0]));
            } catch (error) {
                console.log(error, 'nivel 3 - desde redux middleware');
            } finally {
                setIsLoading(false);
            }
        }
    };
};
