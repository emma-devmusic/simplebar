import { Button } from '../../../components';
import { Trash2Icon } from 'lucide-react';
import { ProductCart } from '../../../redux/slices/cartSlice';
import Swal from 'sweetalert2';

interface CartItemProps {
    item: ProductCart;
    onEdit: (cartProduct: ProductCart) => void;
    onRemove: (productId: number) => void;
}

export const CartItem = ({ item, onEdit, onRemove }: CartItemProps) => {
    const handleRemove = () => {
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
    };

    return (
        <tr>
            <td className="min-w-2/3 px-4 text-gray-800 py-2 dark:text-gray-200">
                <div className="relative flex flex-col items-start justify-end">
                    <span
                        onClick={() => onEdit(item)}
                        className="cursor-pointer text-xs text-primary underline dark:text-blue-400"
                    >
                        Editar
                    </span>
                    <span className="">{item.product.name}</span>
                </div>
            </td>
            <td className="flex w-full items-center !h-full justify-end whitespace-nowrap text-gray-700 gap-2 px-2 py-2 dark:text-gray-300">
                <div className="flex flex-col-reverse items-end">
                    <span className="text-xs text-gray-700 dark:text-gray-400">
                        (${Number(item.product.price).toLocaleString()} x{' '}
                        {item.quantity})
                    </span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                        $
                        {(
                            Number(item.product.price) * item.quantity
                        ).toLocaleString()}
                    </span>
                </div>
                <Button
                    action={handleRemove}
                    icon={<Trash2Icon className="h-4 w-4 px-0 text-red-500" />}
                    variant="plain-danger"
                    label=""
                    className="!px-0 hover:bg-red-100 lg:mx-2 dark:hover:bg-red-900/20"
                />
            </td>
        </tr>
    );
};
