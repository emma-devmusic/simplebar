import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';
import { Category, SubCategory } from '../../types/categories';
import { Dispatch, SetStateAction } from 'react';

interface SubcategoriesProducts {
    subCategory: SubCategory,
    products: Product[]
}

interface ProductSlice {
    products: Product[];
    isLoading: boolean;
    selectedProduct: Product | null;
    filteredProducts: SubcategoriesProducts[];
}

const initialState: ProductSlice = {
    products: [],
    isLoading: false,
    selectedProduct: null,
    filteredProducts: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts(_state, _action: PayloadAction<{path: string, setIsLoading: Dispatch<SetStateAction<boolean>>}>) {}, //middleware
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setSelectedProduct(state, action: PayloadAction<Product | null>) {
            state.selectedProduct = action.payload;
        },
        setFilteredProducts(
            state,
            action: PayloadAction<{ filterText: string; selectedCategory: Category }>
          ) {
            const lowerSearchValue = action.payload.filterText.toLowerCase();
          
            const filteredProductsBySubCategory = action.payload.selectedCategory.subcategories.map(
              (subCategory) => {
                const products = state.products.filter(
                  (prod) =>
                    prod.sub_category_id === subCategory.id &&
                    (prod.name.toLowerCase().includes(lowerSearchValue) ||
                      prod.product_variations.some((prod_var) =>
                        prod_var.description.toLowerCase().includes(lowerSearchValue)
                      ))
                );
          
                return {
                  subCategory: subCategory,
                  products,
                };
              }
            );
            state.filteredProducts = filteredProductsBySubCategory.filter(
              (subCategory) => subCategory.products.length > 0
            );
          }
    },
});

export const { getProducts, setProducts, setLoading, setSelectedProduct, setFilteredProducts } =
    productsSlice.actions;

export default productsSlice.reducer;
