import { ProductCart } from '../../../redux/slices/cartSlice';

interface CartSummaryProps {
    orderMode: 'delivery' | 'pickup';
    currentCart: ProductCart[];
}

export const CartSummary = ({ orderMode, currentCart }: CartSummaryProps) => {
    const total = currentCart.reduce(
        (acc, item) => acc + Number(item.product.price) * item.quantity,
        0
    );

    return (
        <>
            <tr>
                <td className="px-4 py-2 whitespace-nowrap text-gray-500 dark:text-gray-400">
                    Resumen
                </td>
                <td
                    colSpan={2}
                    className="px-4 py-2 text-right whitespace-nowrap text-gray-700 dark:text-gray-300"
                >
                    <span className="font-semibold">
                        ${total.toLocaleString()}
                    </span>
                </td>
            </tr>
            {orderMode === 'delivery' && (
                <tr>
                    <td className="px-4 py-2 whitespace-nowrap text-gray-500 dark:text-gray-400">
                        Costo de envío
                    </td>
                    <td
                        colSpan={2}
                        className="px-4 py-2 text-right whitespace-nowrap text-gray-700 dark:text-gray-300"
                    >
                        <span className="font-semibold">A definir</span>
                    </td>
                </tr>
            )}
            <tr>
                <td className="px-4 py-2 whitespace-nowrap text-gray-800 dark:text-gray-200">
                    Total
                </td>
                <td
                    colSpan={2}
                    className="px-4 py-2 text-right font-bold whitespace-nowrap text-gray-700 dark:text-gray-300"
                >
                    <span>${total.toLocaleString()}</span>
                </td>
            </tr>
        </>
    );
};
