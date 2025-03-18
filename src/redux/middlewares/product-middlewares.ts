import { Dispatch, MiddlewareAPI, PayloadAction } from '@reduxjs/toolkit';
import { fetchData } from '../../services/fetchData';
import { setLoading, setProducts } from '../slices/productSlice';
import { ProductDataSearchResponse } from '../../types/product';
import { ResponseApiDing } from '../../types/api';
import { SetStateAction } from 'react';

export const productsMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<unknown>) => {
        next(action);
        if (action.type === 'products/getProducts') {
            const { path, setIsLoading } = action.payload as {
                path: string;
                setIsLoading: React.Dispatch<SetStateAction<boolean>>;
            };
            try {
                setIsLoading(true);
                const response: ResponseApiDing<ProductDataSearchResponse> =
                    await fetchData(path, 'GET', null);
                state.dispatch(setProducts(response.data.items));
            } catch (error) {
                console.log(error, 'nivel 3 - desde redux middleware');
            } finally {
                setLoading(false);
            }
        }
    };
};
