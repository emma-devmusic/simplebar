import {
    RootState,
    useAppDispatch,
    useAppSelector,
} from '../../../../redux/store';
import { uiDrawer } from '../../../../redux/slices/uiSlice';
import { OrderItemDataSearchResponse } from '../../../../types/orders';
import { CartItem } from '../../../../types/cart';

interface NavbarCartProps {
    currentCart: CartItem[];
    currentOrder: OrderItemDataSearchResponse | null;
    newProducts: CartItem[];
}

export const NavbarCart = ({
    currentCart,
    currentOrder,
    newProducts,
}: NavbarCartProps) => {
    const dispatch = useAppDispatch();
    const { currentPOS } = useAppSelector(
        (state: RootState) => state.point_of_sales
    );

    if (currentOrder) {
        return (
            <div
                className="relative flex items-center gap-4 p-2 lg:hidden"
                onClick={() => {
                    dispatch(
                        uiDrawer({
                            drawerFor: 'edit_cart',
                            drawerTitle: `Editar orden #${currentOrder.order_number}`,
                            size: 'full',
                            orientation: 'bottom',
                        })
                    );
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 20 20"
                >
                    <path
                        className="text-gray-400 dark:text-gray-300"
                        fill="currentColor"
                        d="M20 12v5H0v-5a2 2 0 1 0 0-4V3h20v5a2 2 0 1 0 0 4M3 5v10h14V5zm7 7.08l-2.92 2.04L8.1 10.7L5.27 8.56l3.56-.08L10 5.12l1.17 3.36l3.56.08l-2.84 2.15l1.03 3.4L10 12.09z"
                    ></path>
                </svg>
                <span className="absolute top-0 right-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-danger text-xs font-bold text-white">
                    {newProducts.length}
                </span>
            </div>
        );
    }

    if (currentCart.length > 0) {
        return (
            <div
                className="relative flex items-center gap-4 p-2 lg:hidden"
                onClick={() => {
                    dispatch(
                        uiDrawer({
                            drawerFor: 'cart',
                            drawerTitle: currentPOS
                                ? `Mi pedido (mesa ${currentPOS})`
                                : 'Mi pedido',
                            size: 'full',
                            orientation: 'bottom',
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
        );
    }

    return null;
};
