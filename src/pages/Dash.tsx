import { Spinner } from '../components';
import { NoContent } from '../components/NoContent';
import FloatingButton from '../components/buttons/FloatingButton';
import { useForm } from '../hooks/useForm';
import { useEffect, useState } from 'react';
import Cart from './modules/Cart';
import OrderEditCart from './modules/OrderEditCart';
import { LayoutView } from '../components/layout';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getCategories } from '../redux/slices/categorySlice';
import {
    get_products,
    setAllFilteredProducts,
    setFilteredProducts,
} from '../redux/slices/productSlice';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import FilterSection from './modules/FilterSection';
import ProductsSection from './modules/ProductsSection';
import { getTenantName } from '../redux/slices/tenantSlice';
import { uiDrawer } from '../redux/slices/uiSlice';
import { get_order_by_id, clearCurrentOrder } from '../redux/slices/orderSlice';
import { Button } from '../components';

export const Dash = () => {
    const dispatch = useAppDispatch();
    const { tenant_path, branch_path, order_number } = useParams();
    const { categories } = useAppSelector((state) => state.categories);
    const { tenant_name } = useAppSelector((state) => state.tenant);
    const { products } = useAppSelector((state) => state.products);
    const { currentOrder } = useAppSelector((state) => state.order);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDataLoaded, setIsDataLoaded] = useState({
        orderIsLoaded: false,
        productsAreLoaded: false,
        categoriesAreLoaded: false,
        tenantNameIsLoaded: false,
    });
    const [value, handleInputChange] = useForm({ search: '' });
    const [searchParams] = useSearchParams();
    const { currentPOS } = useAppSelector((state) => state.point_of_sales);
    const navigate = useNavigate();

    const dataAlreadyLoaded =
        products.length > 0 && categories.length > 0 && !!tenant_name;
    const isLoadingData =
        !isDataLoaded.orderIsLoaded ||
        !isDataLoaded.productsAreLoaded ||
        !isDataLoaded.categoriesAreLoaded ||
        !isDataLoaded.tenantNameIsLoaded;

    // Cargar orden si hay order_number en la URL
    useEffect(() => {
        if (order_number && tenant_path && branch_path && !currentOrder) {
            dispatch(
                get_order_by_id({
                    path: `${tenant_path}/${branch_path}`,
                    order_number: Number(order_number),
                    setIsLoading,
                    navigate,
                    onSuccess: () => {
                        setIsDataLoaded((prev) => ({
                            ...prev,
                            orderIsLoaded: true,
                        }));
                    },
                })
            );
        }
    }, [
        order_number,
        tenant_path,
        branch_path,
        currentOrder,
        dispatch,
        navigate,
    ]);

    // Limpiar orden si ya no hay order_number en la URL
    useEffect(() => {
        if (!order_number && currentOrder) {
            dispatch(clearCurrentOrder());
        }
    }, [order_number, currentOrder, dispatch]);

    useEffect(() => {
        if (dataAlreadyLoaded) {
            setIsDataLoaded({
                orderIsLoaded: !order_number
                    ? true
                    : currentOrder
                      ? true
                      : false,
                productsAreLoaded: true,
                categoriesAreLoaded: true,
                tenantNameIsLoaded: true,
            });
        }
        if (products.length === 0 && branch_path && tenant_path) {
            dispatch(
                get_products({
                    path: `${tenant_path}/${branch_path}?limit=100`,
                    setIsLoading,
                    onSuccess: () => {
                        setIsDataLoaded((prev) => ({
                            ...prev,
                            productsAreLoaded: true,
                        }));
                    },
                })
            );
        }
        if (categories.length === 0 && branch_path && tenant_path) {
            dispatch(
                getCategories({
                    path: `${tenant_path}/${branch_path}`,
                    setIsLoading,
                    onSuccess: () => {
                        setIsDataLoaded((prev) => ({
                            ...prev,
                            categoriesAreLoaded: true,
                        }));
                    },
                })
            );
        }
        if (!tenant_name && branch_path && tenant_path) {
            dispatch(
                getTenantName({
                    tenant: tenant_path,
                    branch: branch_path,
                    setIsLoading,
                    onSuccess: () => {
                        setIsDataLoaded((prev) => ({
                            ...prev,
                            tenantNameIsLoaded: true,
                        }));
                    },
                })
            );
        }
        if (branch_path) localStorage.setItem('branch_path', branch_path);
    }, [
        branch_path,
        tenant_path,
        products.length,
        categories.length,
        tenant_name,
        dispatch,
        dataAlreadyLoaded,
        order_number,
        currentOrder,
    ]);

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
    }, [value.search, searchParams, categories, products, dispatch]);

    if (isLoadingData || isLoading) {
        return (
            <div className="flex min-h-48 w-full flex-row items-center justify-center">
                <Spinner />
            </div>
        );
    }

    // Si hay order_number pero no se pudo cargar la orden
    if (order_number && !currentOrder && !isLoadingData) {
        return (
            <div className="flex min-h-48 w-full flex-col items-center justify-center gap-2">
                <p className="text-gray-700 dark:text-gray-300">
                    Hubo un error al cargar la orden
                </p>
                <Button
                    label="Volver"
                    action={() =>
                        tenant_path && branch_path
                            ? navigate(
                                  `/${tenant_path}/${branch_path}${currentPOS ? `?table=${currentPOS}` : ''}`
                              )
                            : navigate('/')
                    }
                    size="sm"
                />
            </div>
        );
    }

    return (
        <div className="flex w-full flex-col lg:flex-row lg:gap-4">
            {categories.length === 0 ? (
                <NoContent message="No se encontraron categorias" />
            ) : (
                <div className="relative flex w-full flex-col lg:w-[66%]">
                    <FilterSection
                        inputValue={value.search}
                        handleInputChange={handleInputChange}
                    />
                    <ProductsSection />
                </div>
            )}
            <div className="hidden w-full flex-col gap-2 lg:flex lg:w-[33%]">
                <LayoutView
                    title={
                        currentOrder
                            ? `Editar Orden #${currentOrder.order_number}`
                            : currentPOS
                              ? `Mi pedido (mesa ${currentPOS})`
                              : 'Mi pedido'
                    }
                >
                    {currentOrder ? <OrderEditCart /> : <Cart />}
                </LayoutView>
            </div>
            {!currentOrder && (
                <FloatingButton
                    onClick={() => {
                        dispatch(
                            uiDrawer({
                                drawerFor: 'search_order',
                                drawerTitle: 'Buscar Orden',
                                size: 'sm',
                                orientation: 'bottom',
                            })
                        );
                    }}
                    label="Tengo una orden"
                    position="bottom-right"
                    className="lg:hidden"
                />
            )}
        </div>
    );
};
