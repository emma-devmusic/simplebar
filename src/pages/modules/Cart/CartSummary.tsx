import { RootState, useAppSelector } from '../../../redux/store';
import { CartItem } from '../../../types/cart';
import { OrderType } from '../../../types/orders';

interface CartSummaryProps {
    orderMode: OrderType;
    currentCart: CartItem[];
}

export const CartSummary = ({ orderMode, currentCart }: CartSummaryProps) => {
    const { currentOrder } = useAppSelector((state: RootState) => state.order);
    const summary = currentCart.reduce(
        (acc, item) => acc + Number(item.product.price) * item.quantity,
        0
    );

    const total =
        summary +
        (currentOrder?.shipment?.shipping_cost || 0) -
        (currentOrder?.discount || 0);
    return (
        <>
            {orderMode === 'delivery' &&
            currentOrder?.shipment?.shipping_cost ? (
                <div className="flex justify-between">
                    <div className="py-2 whitespace-nowrap text-gray-500 dark:text-gray-400">
                        Costo de envío
                    </div>
                    <div className="py-2 text-right whitespace-nowrap text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">
                            {currentOrder?.shipment?.shipping_cost}
                        </span>
                    </div>
                </div>
            ) : null}
            {currentOrder?.discount ? (
                <div className="flex justify-between">
                    <div className="py-2 whitespace-nowrap text-gray-500 dark:text-gray-400">
                        Descuento
                    </div>
                    <div className="py-2 text-right whitespace-nowrap text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">
                            {currentOrder?.discount || 0}
                        </span>
                    </div>
                </div>
            ) : null}
            <div className="flex justify-between">
                <div className="py-2 whitespace-nowrap text-gray-800 dark:text-gray-200">
                    {currentOrder ? 'Subtotal' : 'Total'}
                </div>
                <div className="py-2 text-right font-bold whitespace-nowrap text-gray-700 dark:text-gray-300">
                    <span>${total.toLocaleString()}</span>
                </div>
            </div>
        </>
    );
};
