import logo from '../../../assets/img/isologo-ding-degraded.png';
import logoDark from '../../../assets/img/isologo-ding-white.png';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { setCurrentPOS } from '../../../redux/slices/pointOfSalesSlice';
import { NavbarCart } from './components/NavbarCart';
import { uiModal } from '../../../redux/slices/uiSlice';
import { Button } from '../../buttons/Button';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

export const Navbar = () => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const { currentOrder, newProducts } = useAppSelector(
        (state) => state.order
    );
    const { tenant_name } = useAppSelector((state) => state.tenant);
    const { tenant_path, branch_path } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const [onDarkTheme, setOnDarkTheme] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setOnDarkTheme(e.matches);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const currentCart = useMemo(() => {
        if (!tenant_path || !branch_path) return [];
        return cartProducts[`${tenant_path}_${branch_path}`] || [];
    }, [cartProducts, tenant_path, branch_path]);

    useEffect(() => {
        const point_of_sale_id = searchParams.get('table');
        if (point_of_sale_id) {
            dispatch(setCurrentPOS(Number(point_of_sale_id)));
        }
    }, [searchParams]);

    return (
        <header
            className="bg-white py-1 shadow-md dark:bg-neutral-950 dark:shadow-neutral-800"
            id="navbar"
        >
            <div className="mx-auto flex h-13 items-center px-4 sm:px-6 md:h-16 lg:px-8">
                <div className="flex w-full items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5">
                        <img
                            src={onDarkTheme ? logoDark : logo}
                            alt="Simplebar Logo"
                            className="h-7 lg:h-10"
                        />
                        <div className="mb-2 flex flex-col leading-1">
                            <p className="overflow-x-hidden text-lg font-medium text-nowrap md:text-xl lg:text-[24px]">
                                {tenant_name || 'Simplebar'}
                            </p>
                            <p className="text-[12px]">
                                Simple
                                <span className="dark:text-primary">Bar</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center gap-2">
                        {isDesktop && (
                            <Button
                                label="Tengo una orden"
                                action={() => {
                                    dispatch(
                                        uiModal({
                                            modalFor: 'search_order',
                                            modalTitle: 'Buscar mi orden',
                                        })
                                    );
                                }}
                                variant="primary-outline"
                                tooltip="Selecciona para colocar tu número de orden y agregar más productos."
                                tooltipPosition='left'
                            />
                        )}
                        <NavbarCart
                            currentCart={currentCart}
                            currentOrder={currentOrder}
                            newProducts={newProducts}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};
