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
            <td className="min-w-2/3 px-4 text-gray-800">
                <div className="relative flex flex-col items-start justify-end">
                    <span
                        onClick={() => onEdit(item)}
                        className="cursor-pointer text-xs text-primary underline"
                    >
                        Editar
                    </span>
                    <span className="">{item.product.name}</span>
                </div>
            </td>
            <td className="flex h-12 w-full items-center justify-end text-center whitespace-nowrap text-gray-700">
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-xs text-gray-700">
                        (${Number(item.product.price).toLocaleString()} x{' '}
                        {item.quantity})
                    </span>
                    <span className="font-semibold text-gray-800">
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
                    className="!px-0 hover:bg-red-100 lg:mx-2"
                />
            </td>
        </tr>
    );
};
