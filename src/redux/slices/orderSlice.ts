import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    GetOrderByIdPayload,
    NewOrderPayload,
    OrderItemDataSearchResponse,
    UpdateOrderPayload,
} from '../../types/orders';
import { ProductVariation } from '../../types/product';
import { CartItem } from '../../types/cart';

interface OrderSlice {
    currentOrder: OrderItemDataSearchResponse | null;
    newProducts: CartItem[];
}

const initialState: OrderSlice = {
    currentOrder: null,
    newProducts: [],
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setCurrentOrder(
            state,
            action: PayloadAction<OrderItemDataSearchResponse>
        ) {
            state.currentOrder = action.payload;
        },
        get_order_by_id(_state, _payload: PayloadAction<GetOrderByIdPayload>) {},
        update_order(_state, _payload: PayloadAction<UpdateOrderPayload>) {},
        create_order(_state, _payload: PayloadAction<NewOrderPayload>) {},
        addNewProduct(
            state,
            action: PayloadAction<{
                product: ProductVariation;
                quantity: number;
            }>
        ) {
            const { product, quantity } = action.payload;
            const existingProduct = state.newProducts.find(
                (item) => item.product.id === product.id
            );

            if (existingProduct) {
                existingProduct.quantity = quantity;
            } else {
                state.newProducts.push({ product, quantity });
            }
        },
        removeNewProduct(state, action: PayloadAction<number>) {
            state.newProducts = state.newProducts.filter(
                (item) => item.product.id !== action.payload
            );
        },
        clearNewProducts(state) {
            state.newProducts = [];
        },
        clearCurrentOrder(state) {
            state.currentOrder = null;
            state.newProducts = [];
        },
    },
});

export const {
    setCurrentOrder,
    addNewProduct,
    removeNewProduct,
    clearNewProducts,
    clearCurrentOrder,
    get_order_by_id,
    create_order,
    update_order,
} = orderSlice.actions;

export default orderSlice.reducer;
