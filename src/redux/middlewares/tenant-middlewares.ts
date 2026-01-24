import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { fetchData } from '../../services/fetchData';
import { ResponseApiDing } from '../../types/api';
import { executeApiCall } from '../../services/executeApiCall';
import { DataTenantSearchResponse, GetTenantPayload } from '../../types/tenant';
import { setTenantName } from '../slices/tenantSlice';

export const tenantMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);
        if (action.type === 'tenant/getTenantName') {
            const payload: GetTenantPayload = action.payload;
            console.log('Llamada a la Api - MANAGE-TENANTS - SEARCH');
            await executeApiCall(
                payload.setIsLoading,
                () =>
                    fetchData(
                        `/pub/tnt/info/${payload.tenant}/${payload.branch}`,
                        'GET',
                        null
                    ),
                state.dispatch,
                (response: ResponseApiDing<DataTenantSearchResponse>) => {
                    state.dispatch(setTenantName(response.data.tenant_name));
                    payload.onSuccess?.();
                }
            );
        }
    };
};
