import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import {
    setCategories
} from '../slices/categorySlice';
import { fetchData } from '../../services/fetchData';
import { DataCategorySearchResponse, GetCategoryPayload } from '../../types/categories';
import { ResponseApiDing } from '../../types/api';
import { executeApiCall } from '../../services/executeApiCall';

export const categoriesMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);
        if (action.type === 'categories/getCategories') {
            const payload: GetCategoryPayload = action.payload
            console.log('Llamada a la Api - MANAGE-CATEGORIES - SEARCH');
            await executeApiCall(
                payload.setIsLoading,
                () => fetchData(`/pub-sts/categories/${payload.path}`, "GET", null),
                state.dispatch,
                (response: ResponseApiDing<DataCategorySearchResponse>) => {
                    state.dispatch(setCategories(response.data.items));
                },
            );
        }
    };
};
