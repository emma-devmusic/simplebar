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
import { NoContent } from '../components/NoContent';

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
            <div className="flex h-16 w-full flex-row items-center justify-center">
                <Spinner size={16} />
            </div>
        );
    }

    return (
        <div className="flex gap-2 container mx-auto">
            <div className="flex flex-col shadow-sm max-w-[66.6%]">
                {categories.length === 0 ? (
                    <NoContent message="No se encontraron categorias" />
                ) : (
                    <div className='w-full'>
                        <FilterSection
                            inputValue={value.search}
                            handleInputChange={handleInputChange}
                        />
                        <ProductsSection />
                    </div>
                )}
            </div>
            <div className="relative hidden w-full flex-col gap-2 px-4 lg:flex max-w-[33.3%]">
                <div className="sticky top-0">
                    <LayoutView title="Mi pedido">
                        <Cart />
                    </LayoutView>
                </div>
            </div>
        </div>
    );
};
