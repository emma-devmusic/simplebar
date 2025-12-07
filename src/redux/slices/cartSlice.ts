import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductVariation } from '../../types/product';

export interface ProductCart {
    product: ProductVariation;
    quantity: number;
}

interface CartSlice {
    cartProducts: {
        [key: string]: ProductCart[];
    };
}

const initialState: CartSlice = {
    cartProducts: {},
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(
            state,
            action: PayloadAction<{
                tenant_path: string;
                branch_path: string;
                products: ProductCart[];
            }>
        ) {
            const { tenant_path, branch_path, products } = action.payload;
            state.cartProducts[`${tenant_path}_${branch_path}`] = products;
            localStorage.setItem(
                'cart_state',
                JSON.stringify(state.cartProducts)
            );
        },
        emptyCart(state) {
            localStorage.removeItem('cart_state');
            state.cartProducts = {};
        },
        clearCurrentCart(
            state,
            action: PayloadAction<{
                tenant_path: string;
                branch_path: string;
            }>
        ) {
            const { tenant_path, branch_path } = action.payload;
            delete state.cartProducts[`${tenant_path}_${branch_path}`];
            localStorage.setItem(
                'cart_state',
                JSON.stringify(state.cartProducts)
            );
        },
        loadAllCarts(
            state,
            action: PayloadAction<{ [key: string]: ProductCart[] }>
        ) {
            state.cartProducts = action.payload;
        },
        addOrUpdateProduct(
            state,
            action: PayloadAction<{
                tenant_path: string;
                branch_path: string;
                product: ProductVariation;
                quantity: number;
            }>
        ) {
            const { tenant_path, branch_path, product, quantity } =
                action.payload;

            if (!state.cartProducts[`${tenant_path}_${branch_path}`]) {
                state.cartProducts[`${tenant_path}_${branch_path}`] = [];
            }

            const existingProduct = state.cartProducts[
                `${tenant_path}_${branch_path}`
            ].find((item) => item.product.id === product.id);

            if (existingProduct) {
                existingProduct.quantity = quantity;
            } else {
                state.cartProducts[`${tenant_path}_${branch_path}`].push({
                    product,
                    quantity,
                });
            }
            localStorage.setItem(
                'cart_state',
                JSON.stringify(state.cartProducts)
            );
        },
        removeProduct(
            state,
            action: PayloadAction<{
                tenant_path: string;
                branch_path: string;
                productId: number;
            }>
        ) {
            const { tenant_path, branch_path, productId } = action.payload;

            if (state.cartProducts[`${tenant_path}_${branch_path}`]) {
                state.cartProducts[`${tenant_path}_${branch_path}`] =
                    state.cartProducts[`${tenant_path}_${branch_path}`].filter(
                        (item) => item.product.id !== productId
                    );
                localStorage.setItem(
                    'cart_state',
                    JSON.stringify(state.cartProducts)
                );
            }
        },
    },
});

export const {
    setCart,
    addOrUpdateProduct,
    removeProduct,
    emptyCart,
    clearCurrentCart,
    loadAllCarts,
} = cartSlice.actions;

export default cartSlice.reducer;
