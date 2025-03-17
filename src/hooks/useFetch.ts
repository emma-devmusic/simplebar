import { useEffect, useState } from 'react'
import { FetchMethod, ResponseApiDing } from '../types/api';
import {fetchData} from "../services/fetchData"

interface UseFetchReturns<T> {
    data: ResponseApiDing<T>;
    isLoading: boolean;
    error: any;
    handleCancelRequest: () => void;
}

export const useFetch = <T,>(enpoint: string, method: FetchMethod, obj: object | null): UseFetchReturns<T> => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState<ResponseApiDing<T>>({
        code: 0,
        error: false,
        message: '',
        data: {} as T
    });
    const [error, setError] = useState<string | null>(null);
    const [controller, setController] = useState<AbortController | null>(null)

    useEffect(() => {
        const abortController = new AbortController()
        setController(abortController)
        setIsLoading(true)

        fetchData(
            enpoint,
            method,
            obj,
            undefined,
            abortController.signal
        )
            .then(data => setData(data))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log('Request Cancelled');
                } else {
                    setError(error)
                }
            })
            .finally(() => setIsLoading(false))

        return () => abortController.abort()
    }, [])

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort()
            setError('Petición Cancelada')
        }
    }

    return { data, isLoading, error, handleCancelRequest }
}