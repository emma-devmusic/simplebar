import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { useEffect, useState } from 'react';
import {
    removeNewProduct,
    update_order,
    addNewProduct,
} from '../../redux/slices/orderSlice';
import { uiCloseDrawer } from '../../redux/slices/uiSlice';
import { Button } from '../../components';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Swal from 'sweetalert2';
import { CartTable } from './Cart/CartTable';
import { ProductVariation } from '../../types/product';
import OrderInfo from './OrderEditCart/OrderInfo';

const OrderEditCart = () => {
    const { currentOrder, newProducts } = useAppSelector(
        (state) => state.order
    );
    const dispatch = useAppDispatch();
    const { tenant_path, branch_path } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { currentPOS } = useAppSelector(
        (state: RootState) => state.point_of_sales
    );

    const handleIncrementNewProduct = (productId: number) => {
        const newProduct = newProducts.find(
            (item) => item.product.id === productId
        );
        if (!newProduct) return;

        dispatch(
            addNewProduct({
                product: newProduct.product as ProductVariation,
                quantity: newProduct.quantity + 1,
            })
        );
    };

    const handleDecrementNewProduct = (productId: number) => {
        const newProduct = newProducts.find(
            (item) => item.product.id === productId
        );
        if (!newProduct || newProduct.quantity <= 1) return;

        dispatch(
            addNewProduct({
                product: newProduct.product as ProductVariation,
                quantity: newProduct.quantity - 1,
            })
        );
    };

    const handleRemoveNewProduct = (productId: number) => {
        dispatch(removeNewProduct(productId));
    };

    const handleUnorder = () => {
        Swal.fire({
            title: '¿Deseas quitar la orden seleccionada?',
            text: 'Los productos agregados sin confirmar se perderán',
            icon: 'warning',
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonColor: '#006ce7',
            cancelButtonText: 'No, continuar editando',
            confirmButtonColor: '#fb2c36',
            confirmButtonText: 'Sí, salir',
        }).then((result) => {
            if (result.isConfirmed) {
                // Navegar primero para cambiar la URL
                navigate(
                    `/${tenant_path}/${branch_path}${currentPOS ? `?table=${currentPOS}` : ''}`
                );
                dispatch(uiCloseDrawer());
            }
        });
    };

    const handleUpdateOrder = async () => {
        if (!currentOrder || !tenant_path || !branch_path) return;

        if (newProducts.length === 0) {
            Swal.fire({
                title: 'Sin cambios',
                text: 'No has agregado productos nuevos a la orden',
                icon: 'info',
                confirmButtonColor: '#006ce7',
            });
            return;
        }

        dispatch(
            update_order({
                order: {
                    order_number: currentOrder.order_number,
                    items: [
                        ...newProducts.map((item) => ({
                            product_variation_id: item.product.id,
                            name: item.product.name,
                            unit_price: item.product.price,
                            quantity: item.quantity,
                        })),
                    ],
                },
                path: `${tenant_path}/${branch_path}`,
                setIsLoading,
                navigate,
            })
        );
    };

    useEffect(() => {}, [currentOrder]);

    if (!currentOrder) return null;

    const total = (
        (currentOrder?.amount_with_discount || 0) +
        newProducts.reduce(
            (sum, item) => sum + item.product.price * item.quantity,
            0
        )
    ).toFixed(2);

    return (
        <div className="flex w-full flex-col gap-4">
            <Button
                label="Quitar orden"
                action={handleUnorder}
                variant="plain-danger"
                disabled={isLoading}
                className="self-end p-0 px-0! py-0!"
                icon={<ArrowLeft className="h-4 w-4" />}
                iconPosition="left"
            />
            {newProducts.length > 0 && (
                <CartTable
                    currentCart={newProducts}
                    onIncrementProduct={handleIncrementNewProduct}
                    onDecrementProduct={handleDecrementNewProduct}
                    onRemoveProduct={handleRemoveNewProduct}
                    orderMode={currentOrder.type}
                    showSummary={false}
                    title="Productos Nuevos"
                    highLighted={true}
                />
            )}
            {newProducts.length > 0 && (
                <div className="flex w-full flex-col gap-2">
                    <Button
                        label="Confirmar"
                        action={handleUpdateOrder}
                        disabled={isLoading || newProducts.length === 0}
                    />
                </div>
            )}

            {currentOrder.items.length > 0 && (
                <CartTable
                    title="Productos Confirmados"
                    currentCart={currentOrder.items.map((item) => ({
                        product: {
                            id: item.product_variation_id,
                            name: item.name,
                            price: item.unit_price,
                        },
                        quantity: item.quantity,
                    }))}
                    showSummary={true}
                    orderMode={currentOrder.type}
                />
            )}

            <div className="rounded-lg border border-gray-200 bg-gray-50 px-4 pt-4 pb-2.5 dark:border-neutral-800 dark:bg-neutral-800">
                <div className="flex items-center justify-between">
                    <span className="text-base leading-normal font-bold text-gray-900 dark:text-gray-200">
                        Total:
                    </span>
                    <span className="text-base leading-normal font-bold text-gray-900 dark:text-gray-200">
                        ${total}
                    </span>
                </div>
            </div>

            <OrderInfo />
        </div>
    );
};

export default OrderEditCart;
