import { Input } from '../components';
import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';
import { Search } from 'lucide-react';
import CategorySelector from './modules/CategorySelector';
import Product from './modules/Product';
import SubCategorySelector from './modules/SubCategorySelector';
import Cart from './modules/Cart';
import { LayoutView } from '../components/layout';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getCategories } from '../redux/slices/categorySlice';
import { getProducts } from '../redux/slices/productSlice';
import { Product as ProductType } from '../types/product';
import { useParams } from 'react-router-dom';

export const Dash = () => {
    const { branch_path } = useParams();
    const { selectedCategory } = useAppSelector((state) => state.categories);
    const { products } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();

    const [value, handleInputChange] = useForm({
        search: '',
    });

    useEffect(() => {
        // dispatch(getCategories(`{tenant_path+'/'+branch_path}`));
        // dispatch(getProducts(`{tenant_path+'/'+branch_path}`));
        dispatch(getCategories('/data/Categories.json'));
        dispatch(getProducts('/data/Products.json'));
        if (branch_path) {
            localStorage.setItem('branch_path', branch_path);
        }
    }, []);

    const filterProducts = (subCategoryId: number): ProductType[] => {
        const lowerSearchValue = value.search.toLowerCase();

        return products.filter(
            (prod) =>
                prod.sub_category_id === subCategoryId &&
                (prod.name.toLowerCase().includes(lowerSearchValue) ||
                    prod.product_variations.some((prod_var) =>
                        prod_var.description
                            .toLowerCase()
                            .includes(lowerSearchValue)
                    ))
        );
    };

    return (
        <div className="flex w-full flex-col gap-2 lg:flex-row">
            <div className="relative flex w-full flex-col gap-2 shadow-md lg:w-4/2">
                <div className="sticky top-0 w-full bg-gray-50 shadow-lg">
                    <CategorySelector />
                    <SubCategorySelector />
                    <div className="px-4 py-2">
                        <div className="relative flex w-full items-center">
                            <Input
                                label="Busca tus productos"
                                className="rounded-lg bg-gray-50"
                                isFloatingLabel
                                placeholder="Hamburguesa"
                                name="search"
                                value={value.search}
                                onChange={handleInputChange}
                                size="sm"
                                inputClass="rounded-lg"
                                labelClass="rounded-lg !bg-gray-50"
                                type="text"
                                iconPosition="left"
                            />
                            <Search className="absolute right-3.5 h-4 w-4 text-gray-400" />
                        </div>
                    </div>
                </div>
                <div className="flex h-full w-full flex-col gap-2 px-4 py-4 pt-2">
                    {selectedCategory &&
                        selectedCategory?.subcategories?.map((sub_cat) => (
                            <div
                                id={`${sub_cat.id}`}
                                key={sub_cat.id}
                                className="w-full"
                            >
                                {filterProducts(sub_cat.id).length > 0 && (
                                    <p className="text-lg font-bold">
                                        {sub_cat.name}
                                    </p>
                                )}
                                <div className="grid w-full grid-cols-1 gap-x-4 md:grid-cols-2">
                                    {filterProducts(sub_cat.id).map(
                                        (prod, index) => (
                                            <Product
                                                product={prod}
                                                key={index}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className="relative hidden w-full flex-col gap-2 px-4 lg:flex">
                <div className="sticky top-0">
                    <LayoutView title="Mi pedido">
                        <Cart />
                    </LayoutView>
                </div>
            </div>
        </div>
    );
};
