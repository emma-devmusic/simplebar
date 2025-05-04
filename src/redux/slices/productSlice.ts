import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetProductByIdPayload, GetProductPayload, Product } from '../../types/product';
import { ItemCategories, SubCategory } from '../../types/categories';

interface SubcategoriesProducts {
    subCategory: SubCategory;
    products: Product[];
}

interface ProductSlice {
    products: Product[];
    selectedProduct: Product | null;
    filteredProducts: SubcategoriesProducts[];
    variationSelected: number;
}

const initialState: ProductSlice = {
    products: [],
    selectedProduct: null,
    filteredProducts: [],
    variationSelected: 0,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        get_products(_state, _action: PayloadAction<GetProductPayload>) { }, //middleware
        set_products(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
        get_product_by_id(_state, _action: PayloadAction<GetProductByIdPayload>) { },//middleware
        setSelectedProduct(state, action: PayloadAction<Product | null>) {
            state.selectedProduct = action.payload;
        },
        setFilteredProducts(
            state,
            action: PayloadAction<{
                filterText: string;
                selectedCategory: ItemCategories;
            }>
        ) {
            const lowerSearchValue = action.payload.filterText.toLowerCase();

            const filteredProductsBySubCategory =
                action.payload?.selectedCategory?.subcategories?.map(
                    (subCategory) => {
                        const products = state.products.filter(
                            (prod) =>
                                prod.sub_category_id === subCategory.id &&
                                (prod.name.toLowerCase().includes(lowerSearchValue)
                                    ||
                                    prod.product_variations.some((prod_var) => prod_var.description.toLowerCase().includes(lowerSearchValue)
                                        ||
                                        prod_var.name.toLowerCase().includes(lowerSearchValue))
                                ) &&
                                prod.active
                        );

                        return {
                            subCategory: subCategory,
                            products,
                        };
                    }
                );
            state.filteredProducts = filteredProductsBySubCategory ? filteredProductsBySubCategory?.filter(
                (subCategory) => subCategory.products.length > 0
            ) : [];
        },
        setAllFilteredProducts(
            state,
            action: PayloadAction<{
                filterText: string;
                categories: ItemCategories[]
            }>
        ) {
            const lowerSearchValue = action.payload.filterText.toLowerCase();
            const { categories } = action.payload;
        
            const filteredProductsBySubCategory = categories.flatMap((category) =>
                category.subcategories?.map((subCategory) => {
                    const products = state.products.filter(
                        (prod) =>
                            prod.sub_category_id === subCategory.id &&
                            (prod.name.toLowerCase().includes(lowerSearchValue) ||
                                prod.product_variations.some(
                                    (prod_var) =>
                                        prod_var.description.toLowerCase().includes(lowerSearchValue) ||
                                        prod_var.name.toLowerCase().includes(lowerSearchValue)
                                )) &&
                            prod.active
                    );
        
                    return {
                        subCategory,
                        products,
                    };
                }) || []
            );
        
            state.filteredProducts = filteredProductsBySubCategory.filter(
                (subCategory) => subCategory.products.length > 0
            );
        },
        setVariationSelected(state, action: PayloadAction<number>) {
            state.variationSelected = action.payload;
        },
    },
});

export const {
    get_products,
    set_products,
    setSelectedProduct,
    setFilteredProducts,
    setVariationSelected,
    setAllFilteredProducts
} = productsSlice.actions;

export default productsSlice.reducer;