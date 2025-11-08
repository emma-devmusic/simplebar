import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductVariation } from '../../types/product';

export interface ProductCart {
    product: ProductVariation;
    quantity: number;
}

interface CartSlice {
    cartProducts: ProductCart[];
}

const initialState: CartSlice = {
    cartProducts: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<ProductCart[]>) {
            localStorage.setItem('cart_state', JSON.stringify(action.payload));
            state.cartProducts = action.payload;
        },
        emptyCart(state) {
            localStorage.removeItem('cart_state');
            state.cartProducts = [];
        },
        addOrUpdateProduct(
            state,
            action: PayloadAction<{
                product: ProductVariation;
                quantity: number;
            }>
        ) {
            const { product, quantity } = action.payload;
            const existingProduct = state.cartProducts.find(
                (item) => item.product.id === product.id
            );

            if (existingProduct) {
                existingProduct.quantity = quantity;
            } else {
                state.cartProducts.push({ product, quantity });
            }
            localStorage.setItem(
                'cart_state',
                JSON.stringify(state.cartProducts)
            );
        },
        removeProduct(state, action: PayloadAction<number>) {
            state.cartProducts = state.cartProducts.filter(
                (item) => item.product.id !== action.payload
            );
            localStorage.setItem(
                'cart_state',
                JSON.stringify(state.cartProducts)
            );
        },
    },
});

export const { setCart, addOrUpdateProduct, removeProduct, emptyCart } =
    cartSlice.actions;

export default cartSlice.reducer;
