import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

interface ProductSlice {
    products: Product[];
    isLoading: boolean;
    selectedProduct: Product | null;
}

const initialState: ProductSlice = {
    products: [],
    isLoading: false,
    selectedProduct: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(_state, _action: PayloadAction<string>) {}, //middleware
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setSelectedProduct(state, action: PayloadAction<Product | null>) {
            state.selectedProduct = action.payload;
        },
    },
});

export const { getProducts, setProducts, setLoading, setSelectedProduct } =
    productsSlice.actions;

export default productsSlice.reducer;
