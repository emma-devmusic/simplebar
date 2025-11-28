import logo from '../../../assets/img/isologo-ding-degraded.png';
import logoDark from '../../../assets/img/isologo-ding-white.png';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { uiModal } from '../../../redux/slices/uiSlice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';

export const Navbar = () => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const { tenant_name } = useAppSelector((state) => state.tenant);
    const { tenant_path, branch_path } = useParams();
    const dispatch = useAppDispatch();

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

    return (
        <header
            className="bg-white shadow-md dark:bg-neutral-950 dark:shadow-neutral-800"
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

                    {currentCart.length > 0 && (
                        <div
                            className="relative flex items-center gap-4 p-2 lg:hidden"
                            onClick={() => {
                                dispatch(
                                    uiModal({
                                        modalFor: 'cart',
                                        modalTitle: 'Mi Pedido',
                                    })
                                );
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-7.5"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    className="text-gray-400 dark:text-gray-300"
                                    fill="currentColor"
                                    d="M6 13h9c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V4H2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v2h13l-4 7H6zm-.5 3c.83 0 1.5.67 1.5 1.5S6.33 19 5.5 19S4 18.33 4 17.5S4.67 16 5.5 16m9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"
                                ></path>
                            </svg>
                            <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-danger text-xs font-bold text-white">
                                {currentCart.length}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
