import { ProductCart } from '../../../redux/slices/cartSlice';
import { useAppSelector } from '../../../redux/store';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { EmptyCart } from './EmptyCart';

interface CartTableProps {
    orderMode: 'delivery' | 'pickup';
    onEditProduct: (cartProduct: ProductCart) => void;
    onRemoveProduct: (productId: number) => void;
}

export const CartTable = ({
    orderMode,
    onEditProduct,
    onRemoveProduct,
}: CartTableProps) => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    return (
        <div className="overflow-x-auto overflow-y-auto rounded-lg border border-gray-200 text-sm md:max-h-[42vh] 2xl:max-h-[50vh] dark:border-neutral-800">
            <table className="relative w-full divide-y-2 divide-gray-200 bg-white dark:divide-neutral-800 dark:bg-neutral-900">
                <thead className="sticky top-0 z-10 w-full bg-white text-left dark:bg-neutral-900">
                    <tr>
                        <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                            Producto
                        </th>
                        <th className="px-4 py-2 text-right font-medium whitespace-nowrap text-gray-900 dark:text-white">
                            Precio ($)
                        </th>
                    </tr>
                </thead>

                <tbody className="w-full divide-y divide-gray-200 dark:divide-neutral-800">
                    {cartProducts.length > 0 &&
                        cartProducts.map((item, index: number) => (
                            <CartItem
                                key={index}
                                item={item}
                                onEdit={onEditProduct}
                                onRemove={onRemoveProduct}
                            />
                        ))}

                    {cartProducts.length > 0 && (
                        <CartSummary orderMode={orderMode} />
                    )}
                </tbody>
            </table>
            {cartProducts.length <= 0 && <EmptyCart />}
        </div>
    );
};
