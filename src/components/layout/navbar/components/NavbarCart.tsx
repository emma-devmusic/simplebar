import {
    RootState,
    useAppDispatch,
    useAppSelector,
} from '../../../../redux/store';
import { uiDrawer } from '../../../../redux/slices/uiSlice';
import { OrderItemDataSearchResponse } from '../../../../types/orders';
import { CartItem } from '../../../../types/cart';
import { Clock, ShoppingCart } from 'lucide-react';
import { Button } from '../../../index';

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

    const handleOrderClick = () => {
        dispatch(
            uiDrawer({
                drawerFor: 'edit_cart',
                drawerTitle: `Editar orden #${currentOrder?.order_number}`,
                size: 'full',
                orientation: 'bottom',
            })
        );
    };

    if (currentOrder) {
        return (
            <div className="relative flex items-center lg:hidden">
                <Button
                    label="Orden en curso"
                    action={handleOrderClick}
                    variant="primary-outline"
                    icon={<Clock size={20} />}
                    className="!p-2"
                    size="sm"
                />
                {newProducts.length > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-danger text-xs font-bold text-white">
                        {newProducts.length}
                    </span>
                )}
            </div>
        );
    }

    if (currentCart.length > 0) {
        return (
            <div className="relative flex items-center lg:hidden">
                <Button
                    label=""
                    action={() => {
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
                    variant="primary-outline"
                    icon={<ShoppingCart size={20} />}
                    className="!p-2 h-full"
                    size="sm"
                />
                <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-danger text-xs font-bold text-white">
                    {currentCart.length}
                </span>
            </div>
        );
    }

    return null;
};
