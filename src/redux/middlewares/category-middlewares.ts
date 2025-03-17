
import { Dispatch, MiddlewareAPI, PayloadAction } from "@reduxjs/toolkit";
import { setCategories, setLoading, setSelectedCategory } from "../slices/categorySlice";
import { fetchData } from "../../services/fetchData";
import { CategoryDataSearchResponse } from "../../types/categories";
import { ResponseApiDing } from "../../types/api";


export const categoriesMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: PayloadAction<unknown>) => {

        next(action);
        if (action.type === 'categories/getCategories') {
            state.dispatch(setLoading(true))
            const payload = action.payload as string
            try {
                const response: ResponseApiDing<CategoryDataSearchResponse> = await fetchData(payload, 'GET', null)
                state.dispatch(setCategories(response.data.items))
                state.dispatch(setSelectedCategory(response.data.items[0]))
            } catch (error) {
                console.log(error, 'nivel 3 - desde redux middleware');
            } finally {
                state.dispatch(setLoading(false))
            }
        }
    }
}


