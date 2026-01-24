import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { fetchData } from '../../services/fetchData';
import {
    GetProductByIdPayload,
    GetProductPayload,
    Product,
    ProductDataSearchResponse,
} from '../../types/product';
import { ResponseApiDing } from '../../types/api';
import { executeApiCall } from '../../services/executeApiCall';
import { set_products, setSelectedProduct } from '../slices/productSlice';

export const productsMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);
        if (action.type === 'products/get_products') {
            const { path, setIsLoading, onSuccess }: GetProductPayload = action.payload;
            await executeApiCall(
                setIsLoading,
                () =>
                    fetchData(`/pub-sts/products/${path}`,'GET',null),
                state.dispatch,
                (response: ResponseApiDing<ProductDataSearchResponse>) => {
                    state.dispatch(set_products(response.data.items));
                    onSuccess?.();
                }
            );
        }
        if (action.type === 'product/get_product_by_id') {
            const { path, setIsLoading } = action.payload as GetProductByIdPayload
            await executeApiCall(
                setIsLoading,
                () => fetchData(`/sts/manage-products/products/${path}`, 'GET', null),
                state.dispatch,
                (response: ResponseApiDing<Product>) => {
                    state.dispatch(setSelectedProduct(response.data))
                }
            )
        }
    };
};
