import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductVariation } from '../../types/product';

export interface ProductCart {
    product: ProductVariation,
    quantity: number,
}

interface CartSlice {
    cartProducts: ProductCart[]
}

const initialState: CartSlice = {
    cartProducts: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<any>) {
            state.cartProducts = action.payload
        },
        addOrUpdateProduct(state, action: PayloadAction<{ product: any; quantity: number }>) {
            const { product, quantity } = action.payload;
            const existingProduct = state.cartProducts.find((item) => item.product.id === product.id);

            if (existingProduct) {
                existingProduct.quantity = quantity;
            } else {
                state.cartProducts.push({ product, quantity });
            }
        },
        removeProduct(state, action: PayloadAction<number>) {
            state.cartProducts = state.cartProducts.filter((item) => item.product.id !== action.payload);
        },
    }
});

export const {
    setCart,
    addOrUpdateProduct,
    removeProduct
} = cartSlice.actions;

export default cartSlice.reducer;
