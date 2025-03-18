import { Input, Spinner } from '../components';
import { useForm } from '../hooks/useForm';
import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import CategorySelector from './modules/CategorySelector';
import Product from './modules/Product';
import SubCategorySelector from './modules/SubCategorySelector';
import Cart from './modules/Cart';
import { LayoutView } from '../components/layout';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getCategories } from '../redux/slices/categorySlice';
import { getProducts, setFilteredProducts } from '../redux/slices/productSlice';
import { useParams } from 'react-router-dom';

export const Dash = () => {
    const { branch_path } = useParams();
    const { categories, selectedCategory } = useAppSelector(
        (state) => state.categories
    );
    const { products, filteredProducts } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [value, handleInputChange] = useForm({
        search: '',
    });

    useEffect(() => {
        // dispatch(getCategories(`{tenant_path+'/'+branch_path}`));
        // dispatch(getProducts(`{tenant_path+'/'+branch_path}`));
        dispatch(getProducts({ path: '/data/Products.json', setIsLoading }));
        dispatch(
            getCategories({ path: '/data/Categories.json', setIsLoading })
        );
        if (branch_path) {
            localStorage.setItem('branch_path', branch_path);
        }
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            dispatch(
                setFilteredProducts({
                    filterText: value.search,
                    selectedCategory: selectedCategory,
                })
            );
        }
    }, [value.search, selectedCategory]);

    return (
        <div className="flex w-full flex-col gap-2 lg:flex-row">
            {isLoading || categories.length === 0 ? (
                <div className="flex min-h-48 w-full items-center justify-center lg:w-4/2">
                    <Spinner />
                </div>
            ) : (
                <div className="relative flex w-full flex-col gap-2 shadow-sm lg:w-4/2">
                    <div className="sticky top-0 w-full bg-gray-50 shadow-sm">
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
                        {products && filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <div
                                    id={`${item.subCategory.id}`}
                                    key={item.subCategory.id}
                                    className="w-full"
                                >
                                    <p className="text-lg font-bold">
                                        {item.subCategory.name}
                                    </p>
                                    <div className="grid w-full grid-cols-1 gap-x-4 md:grid-cols-2">
                                        {item.products.map((prod, index) => (
                                            <Product
                                                product={prod}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex h-full w-full flex-col items-center gap-2 px-4 py-4 pt-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={'4rem'}
                                    viewBox="0 0 23 24"
                                    className="text-gray-300"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                                    ></path>
                                </svg>
                                <p className="">No se encontraron productos</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
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
