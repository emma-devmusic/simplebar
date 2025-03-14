import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductCart {
    product: any,
    quantity: number,
}

interface CartSlice {
    products: ProductCart[],
    selectedProduct: any
}

const initialState: CartSlice = {
    products: [],
    selectedProduct: {
        id: '',
        name: '',
        price: '',
        image: '',
        category: '',
        description: '',
    },
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action: PayloadAction<any>) {
            state.products = action.payload
        },
        setSelectedProduct(state, action: PayloadAction<any>){
            state.selectedProduct = action.payload
        },
        addOrUpdateProduct(state, action: PayloadAction<{ product: any; quantity: number }>) {
            const { product, quantity } = action.payload;
            const existingProduct = state.products.find((item) => item.product.id === product.id);

            if (existingProduct) {
                existingProduct.quantity = quantity;
            } else {
                state.products.push({ product, quantity });
            }
        },
        removeProduct(state, action: PayloadAction<string>) {
            state.products = state.products.filter((item) => item.product.id !== action.payload);
        },
    }
});

export const {
    setCart,
    setSelectedProduct,
    addOrUpdateProduct,
    removeProduct
} = cartSlice.actions;

export default cartSlice.reducer;
