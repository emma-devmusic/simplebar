import { CartItem as CartItemType } from '../../../types/cart';
import { OrderType } from '../../../types/orders';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { EmptyCart } from './EmptyCart';

interface CartTableProps {
    orderMode: OrderType;
    currentCart: CartItemType[];
    onIncrementProduct?: (productId: number) => void;
    onDecrementProduct?: (productId: number) => void;
    onRemoveProduct?: (productId: number) => void;
    showSummary?: boolean;
    title: string;
    highLighted?: boolean;
}

export const CartTable = ({
    orderMode,
    currentCart,
    onIncrementProduct,
    onDecrementProduct,
    onRemoveProduct,
    showSummary = true,
    title,
    highLighted = false,
}: CartTableProps) => {
    return (
        <div
            className={`rounded-lg border p-4 ${highLighted ? 'border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30' : 'border-gray-200 dark:border-neutral-700'}`}
        >
            {title && (
                <h3
                    className={`my-2 text-sm font-semibold ${highLighted ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-gray-300'}`}
                >
                    {title}
                </h3>
            )}
            <div className="overflow-x-auto overflow-y-auto rounded-lg text-sm md:max-h-[42vh] 2xl:max-h-[50vh]">
                <div className="flex w-full flex-col gap-2 divide-y divide-gray-200 dark:divide-neutral-800 [&_#item-container:last-of-type]:pb-0">
                    {currentCart.length > 0 &&
                        currentCart.map((item, index: number) => (
                            <CartItem
                                key={index}
                                item={item}
                                onIncrement={onIncrementProduct}
                                onDecrement={onDecrementProduct}
                                onRemove={onRemoveProduct}
                            />
                        ))}

                    {currentCart.length > 0 && showSummary && (
                        <CartSummary
                            orderMode={orderMode}
                            currentCart={currentCart}
                        />
                    )}
                </div>
                {currentCart.length <= 0 && <EmptyCart />}
            </div>
        </div>
    );
};
