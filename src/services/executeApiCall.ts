// src/services/apiHelper.ts
import { Dispatch } from "@reduxjs/toolkit";
import { uiModal } from "../redux/slices/uiSlice";
import { ResponseApiDing } from "../types/api";

export async function executeApiCall<T>(
    setIsLoading: (loading: boolean) => void,
    apiCall: () => Promise<ResponseApiDing<T>>,
    dispatch: Dispatch,
    onSuccess?: (response: ResponseApiDing<T>) => void,
    successMessage?: string
): Promise<ResponseApiDing<T> | void> {
    setIsLoading(true);
    try {
        const response = await apiCall();
        if (response.error) {
            dispatch(uiModal({
                modalFor: 'message',
                typeMsg: 'error',
                msg: response.code,
            }));
            return;
        }
        if (successMessage) {
            dispatch(uiModal({
                modalFor: 'message',
                typeMsg: 'success',
                msg: successMessage,
            }));
        }
        if (onSuccess) {
            onSuccess(response);
        }
        return response;
    } catch (error: any) {
        if(error.code === 401) {
            localStorage.clear()
            window.location.href = '/'
            return
        }
        if(typeof error.code === 'string') {
            dispatch(uiModal({
                modalFor: 'message',
                typeMsg: 'error',
                msg: error.code,
                msgTitle: 'Ups!'
            }));
            return
        }
        dispatch(uiModal({
            modalFor: 'message',
            typeMsg: 'error',
            msg: error.message,
            msgTitle: 'Ups!'
        }));
    } finally {
        setIsLoading(false);
    }
}