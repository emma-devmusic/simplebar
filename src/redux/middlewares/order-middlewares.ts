import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { fetchData } from '../../services/fetchData';
import {
    GetOrderByIdPayload,
    NewOrderDataReponse,
    NewOrderPayload,
    OrderItemDataSearchResponse,
    UpdateOrderPayload,
} from '../../types/orders';
import { ResponseApiDing } from '../../types/api';
import { executeApiCall } from '../../services/executeApiCall';
import {
    clearNewProducts,
    get_order_by_id,
    setCurrentOrder,
} from '../slices/orderSlice';
import { uiModal } from '../slices/uiSlice';
import { clearCurrentCart } from '../slices/cartSlice';

export const orderMiddleware = (state: MiddlewareAPI) => {
    return (next: Dispatch) => async (action: any) => {
        next(action);

        if (action.type === 'order/get_order_by_id') {
                const { path, order_number, setIsLoading, navigate, onSuccess } =
                action.payload as GetOrderByIdPayload;
            await executeApiCall(
                setIsLoading,
                () =>
                    fetchData(
                        `/pub-sls/orders/${path}/${order_number}`,
                        'GET',
                        null
                    ),
                state.dispatch,
                (response: ResponseApiDing<OrderItemDataSearchResponse>) => {
                    state.dispatch(setCurrentOrder(response.data));
                    navigate(`/${path}/${order_number}`);
                    onSuccess?.();
                }
            );
        }

        if (action.type === 'order/create_order') {
            const { order, tenant_path, branch_path, setIsLoading } =
                action.payload as NewOrderPayload;
            await executeApiCall(
                setIsLoading,
                () =>
                    fetchData(
                        `/pub-sls/orders/${tenant_path}/${branch_path}`,
                        'POST',
                        order
                    ),
                state.dispatch,
                (response: ResponseApiDing<NewOrderDataReponse>) => {
                    state.dispatch(
                        clearCurrentCart({ tenant_path, branch_path })
                    );
                    action.payload.onSuccess();
                    state.dispatch(
                        uiModal({
                            msgTitle: '¡Pedido realizado con éxito!',
                            msg: 'N° de orden: #' + response.data.order_number,
                            modalFor: 'message',
                            typeMsg: 'success',
                        })
                    );
                }
            );
        }

        if (action.type === 'order/update_order') {
            const { order, path, setIsLoading, navigate } =
                action.payload as UpdateOrderPayload;
            await executeApiCall(
                setIsLoading,
                () =>
                    fetchData(
                        `/pub-sls/orders/${path}/${order.order_number}`,
                        'PATCH',
                        order
                    ),
                state.dispatch,
                () => {
                    state.dispatch(clearNewProducts());
                    state.dispatch(
                        get_order_by_id({
                            order_number: order.order_number,
                            path,
                            setIsLoading,
                            navigate,
                        })
                    );
                },
                '¡Orden actualizada con éxito!'
            );
        }
    };
};
