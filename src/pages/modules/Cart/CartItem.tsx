import { Button } from '../../../components';
import { Trash2Icon, Minus, Plus } from 'lucide-react';
import Swal from 'sweetalert2';
import { CartItem as CartItemType } from '../../../types/cart';

interface CartItemProps {
    item: CartItemType;
    onIncrement?: (productId: number) => void;
    onDecrement?: (productId: number) => void;
    onRemove?: (productId: number) => void;
}

export const CartItem = ({
    item,
    onIncrement,
    onDecrement,
    onRemove,
}: CartItemProps) => {
    const handleRemove = () => {
        if (onRemove) {
            Swal.fire({
                title: '¿Deseas eliminar el elemento del pedido?',
                icon: 'warning',
                showCancelButton: true,
                reverseButtons: true,
                cancelButtonColor: '#006ce7',
                cancelButtonText: 'No, cancelar',
                confirmButtonColor: '#fb2c36',
                confirmButtonText: 'Sí, eliminar',
            }).then((result) => {
                if (result.isConfirmed) {
                    onRemove(item.product.id);
                }
            });
        }
    };

    return (
        <div
            id="item-container"
            className="flex min-h-[40px] w-full items-center justify-between gap-4 text-gray-800 dark:text-gray-200"
        >
            <div className="flex items-center gap-2">
                {onRemove && (
                    <Button
                        action={handleRemove}
                        icon={
                            <Trash2Icon className="h-4 w-4 px-0 text-red-500" />
                        }
                        variant="plain-danger"
                        label=""
                        className="!px-0 hover:bg-red-100 dark:hover:bg-red-900/20"
                    />
                )}
                <p className="leading-tight">
                    {item.product.name}{' '}
                    <span className="text-[10px] whitespace-nowrap text-gray-700 dark:text-gray-400">
                        (${Number(item.product.price).toLocaleString()} x{' '}
                        {item.quantity})
                    </span>
                </p>
            </div>
            <div className="flex items-center gap-2">
                {onIncrement && onDecrement ? (
                    <>
                        <Button
                            action={() => onDecrement(item.product.id)}
                            icon={
                                <Minus
                                    className={`h-3 w-3 ${item.quantity <= 1 ? 'text-neutral-400' : ''}`}
                                />
                            }
                            variant="plain-primary"
                            label=""
                            disabled={item.quantity <= 1}
                            className="!border-none !bg-transparent !px-1 !py-1"
                        />
                        <span className="text-center text-sm font-medium">
                            {item.quantity}
                        </span>
                        <Button
                            action={() => onIncrement(item.product.id)}
                            icon={<Plus className="h-3 w-3" />}
                            variant="plain-primary"
                            label=""
                            className="!border-none !bg-transparent !px-1 !py-1"
                        />
                    </>
                ) : null}
            </div>
        </div>
    );
};
