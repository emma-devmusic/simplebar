
import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../services/fetchData";
import { setLoading, setProducts } from "../slices/productSlice";
import { ProductDataSearchResponse } from "../../types/product";
import { ResponseApiDing } from "../../types/api";


export const productsMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<unknown>) => {

        next(action);
        if (action.type === 'products/getProducts') {
            state.dispatch(setLoading(true))
            const payload = action.payload as string
            try {
                const response: ResponseApiDing<ProductDataSearchResponse> = await fetchData(payload, 'GET', null)
                state.dispatch(setProducts(response.data.items))
            } catch (error) {
                console.log(error, 'nivel 3 - desde redux middleware');
            } finally {
                state.dispatch(setLoading(false))
            }
        }
    }
}


