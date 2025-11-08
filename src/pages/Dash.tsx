import { Spinner } from '../components';
import { useForm } from '../hooks/useForm';
import { useEffect, useState } from 'react';
import Cart from './modules/Cart';
import { LayoutView } from '../components/layout';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getCategories } from '../redux/slices/categorySlice';
import {
    get_products,
    setAllFilteredProducts,
    setFilteredProducts,
} from '../redux/slices/productSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import FilterSection from './modules/FilterSection';
import ProductsSection from './modules/ProductsSection';

export const Dash = () => {
    const { tenant_path, branch_path } = useParams();
    const { categories } = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [value, handleInputChange] = useForm({ search: '' });
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(
            get_products({
                path: `${tenant_path}/${branch_path}?limit=50`,
                setIsLoading,
            })
        );
        dispatch(
            getCategories({
                path: `${tenant_path}/${branch_path}`,
                setIsLoading,
            })
        );
        if (branch_path) localStorage.setItem('branch_path', branch_path);
    }, [tenant_path, branch_path]);

    useEffect(() => {
        const selectedCategory = categories.find(
            (item) => item.id === Number(searchParams.get('category'))
        );
        if (selectedCategory) {
            dispatch(
                setFilteredProducts({
                    filterText: value.search,
                    selectedCategory,
                })
            );
        } else {
            dispatch(
                setAllFilteredProducts({
                    filterText: value.search,
                    categories,
                })
            );
        }
    }, [value.search, searchParams, categories]);

    if (isLoading) {
        return (
            <div className="flex min-h-48 w-full flex-row items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col lg:flex-row lg:gap-2">
            {categories.length === 0 ? (
                <div className="flex h-48 w-full flex-col items-center justify-center gap-2 px-4 pt-2 lg:w-[66%]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={'4rem'}
                        viewBox="0 0 23 24"
                        className="text-gray-300"
                    >
                        <path
                            fill="currentColor"
                            d="M7.425 9.475L11.15 3.4q.15-.25.375-.363T12 2.925t.475.113t.375.362l3.725 6.075q.15.25.15.525t-.125.5t-.35.363t-.525.137h-7.45q-.3 0-.525-.137T7.4 10.5t-.125-.5t.15-.525M17.5 22q-1.875 0-3.187-1.312T13 17.5t1.313-3.187T17.5 13t3.188 1.313T22 17.5t-1.312 3.188T17.5 22M3 20.5v-6q0-.425.288-.712T4 13.5h6q.425 0 .713.288T11 14.5v6q0 .425-.288.713T10 21.5H4q-.425 0-.712-.288T3 20.5m14.5-.5q1.05 0 1.775-.725T20 17.5t-.725-1.775T17.5 15t-1.775.725T15 17.5t.725 1.775T17.5 20M5 19.5h4v-4H5zM10.05 9h3.9L12 5.85zm7.45 8.5"
                        ></path>
                    </svg>
                    <p>No se encontraron categorias</p>
                </div>
            ) : (
                <div className="relative flex w-full flex-col shadow-sm lg:w-[66%]">
                    <FilterSection
                        inputValue={value.search}
                        handleInputChange={handleInputChange}
                    />
                    <ProductsSection />
                </div>
            )}
            <div className="relative hidden w-full flex-col gap-2 px-4 lg:flex lg:w-[33%]">
                <div className="sticky top-0">
                    <LayoutView title="Mi pedido">
                        <Cart />
                    </LayoutView>
                </div>
            </div>
        </div>
    );
};
