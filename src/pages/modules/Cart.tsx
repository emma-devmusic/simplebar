import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useEffect, useState, useMemo } from 'react';
import {
    clearCurrentCart,
    removeProduct,
    addOrUpdateProduct,
} from '../../redux/slices/cartSlice';
import { OrderModeSelector, CartTable } from './Cart/index';
import { useForm } from '../../hooks/useForm';
import { formValidate } from '../../common/helpers';
import { FormsInputs, ObjectErrorsMessages } from '../../types/form';
import { Button, Input } from '../../components';
import { OrderCreate, OrderType } from '../../types/orders';
import { useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Trash2Icon } from 'lucide-react';
import Swal from 'sweetalert2';
import { ProductVariation } from '../../types/product';
import { create_order } from '../../redux/slices/orderSlice';

const initialState = {
    fullname: '',
    phone: '',
    email: '',
    destination_address: '',
};

const Cart = () => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const { tenant_path, branch_path } = useParams();
    const { currentPOS } = useAppSelector((state) => state.point_of_sales);

    const currentCart = useMemo(() => {
        if (!tenant_path || !branch_path) return [];
        return cartProducts[`${tenant_path}_${branch_path}`] || [];
    }, [cartProducts, tenant_path, branch_path]);

    const [isLoading, setIsLoading] = useState(false);
    const [orderMode, setOrderMode] = useState<OrderType>(
        currentPOS ? 'local' : 'delivery'
    );
    const [flag, setFlag] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState({} as ObjectErrorsMessages);

    const [values, handleInputChange, reset] = useForm(initialState);

    useEffect(() => {
        const msgs = formValidate(
            values as FormsInputs,
            orderMode === 'local'
                ? []
                : orderMode === 'delivery'
                  ? ['fullname', 'phone', 'destination_address']
                  : ['fullname', 'phone']
        );
        setErrorMsg(msgs);
    }, [values, orderMode]);

    const handleIncrementProduct = (productId: number) => {
        if (!tenant_path || !branch_path) return;
        const cartProduct = currentCart.find(
            (item) => item.product.id === productId
        );
        if (!cartProduct) return;

        dispatch(
            addOrUpdateProduct({
                tenant_path,
                branch_path,
                product: cartProduct.product as ProductVariation,
                quantity: cartProduct.quantity + 1,
            })
        );
    };

    const handleDecrementProduct = (productId: number) => {
        if (!tenant_path || !branch_path) return;
        const cartProduct = currentCart.find(
            (item) => item.product.id === productId
        );
        if (!cartProduct || cartProduct.quantity <= 1) return;

        dispatch(
            addOrUpdateProduct({
                tenant_path,
                branch_path,
                product: cartProduct.product as ProductVariation,
                quantity: cartProduct.quantity - 1,
            })
        );
    };

    const handleRemoveProduct = (productId: number) => {
        if (!tenant_path || !branch_path) return;
        dispatch(removeProduct({ tenant_path, branch_path, productId }));
    };

    const handleCheckout = async () => {
        setFlag(true);
        if (errorMsg.hasErrors) return;
        if (!tenant_path || !branch_path) return;

        try {
            const orderPayload: OrderCreate = {
                type: orderMode,
                items: currentCart.map((item) => ({
                    product_variation_id: item.product.id,
                    name: item.product.name,
                    unit_price: item.product.price,
                    quantity: item.quantity,
                })),
            };
            if (values.fullname) {
                orderPayload['customer'] = {
                    fullname: values.fullname,
                    phone: values.phone,
                    email: values.email || undefined,
                };
            }
            if (orderMode === 'delivery') {
                orderPayload['shipment'] = {
                    destination_address: {
                        address: values.destination_address,
                    },
                    shipping_cost: 0,
                };
            }
            if (orderMode === 'local' && currentPOS) {
                orderPayload['point_of_sales'] = [currentPOS];
            }

            dispatch(
                create_order({
                    order: orderPayload,
                    tenant_path,
                    branch_path,
                    setIsLoading,
                    onSuccess: () => {
                        reset(initialState);
                        setFlag(false);
                    },
                })
            );
        } catch (error) {
            console.error('Error al finalizar la compra:', error);
        }
    };

    const handleClearCart = () => {
        if (!tenant_path || !branch_path) return;
        Swal.fire({
            title: '¿Deseas vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            reverseButtons: true,
            cancelButtonColor: '#006ce7',
            cancelButtonText: 'No, cancelar',
            confirmButtonColor: '#fb2c36',
            confirmButtonText: 'Sí, eliminar',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(clearCurrentCart({ tenant_path, branch_path }));
            }
        });
    };

    return (
        <div className="flex w-full flex-col gap-4">
            {orderMode !== 'local' && (
                <OrderModeSelector
                    orderMode={orderMode}
                    setOrderMode={setOrderMode}
                />
            )}
            <Input
                disabled={isLoading}
                label={orderMode === 'local' ? 'Nombre (opcional)' : 'Nombre'}
                placeholder="Juan..."
                name="fullname"
                type="text"
                value={values?.fullname}
                onChange={handleInputChange}
                errorMsg={flag ? errorMsg.fullname : ''}
                required={orderMode === 'local' ? false : true}
            />
            <Input
                disabled={isLoading}
                label={
                    orderMode === 'local' ? 'Teléfono (opcional)' : 'Teléfono'
                }
                placeholder="3624000000"
                name="phone"
                type="text"
                value={values?.phone}
                onChange={handleInputChange}
                errorMsg={flag ? errorMsg.phone : ''}
                required={values.fullname && values.email ? true : false}
            />
            <AnimatePresence mode="wait">
                {orderMode === 'delivery' && (
                    <motion.div
                        key="destination-address"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Input
                            disabled={isLoading}
                            label="Dirección del envío"
                            placeholder="Av. Sarmiento 123"
                            name="destination_address"
                            type="text"
                            value={values.destination_address}
                            onChange={handleInputChange}
                            errorMsg={flag ? errorMsg.destination_address : ''}
                            required
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            <Input
                disabled={isLoading}
                label="Correo electrónico (opcional)"
                placeholder="juan@gmail.com"
                name="email"
                type="email"
                value={values.email}
                errorMsg={flag ? errorMsg.email : ''}
                onChange={handleInputChange}
            />
            <div className="mt-2 flex justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Mi carrito
                </h2>
                {currentCart.length > 0 ? (
                    <Button
                        icon={<Trash2Icon className="h-4 w-4" />}
                        iconPosition="right"
                        className="text-xs text-red-500"
                        label="Vaciar carrito"
                        variant="plain-danger"
                        action={handleClearCart}
                    />
                ) : null}
            </div>
            <CartTable
                orderMode={orderMode}
                currentCart={currentCart}
                onIncrementProduct={handleIncrementProduct}
                onDecrementProduct={handleDecrementProduct}
                onRemoveProduct={handleRemoveProduct}
                title="Productos"
                showSummary
            />

            {currentCart.length > 0 ? (
                <div className="flex w-full justify-center">
                    <Button
                        label="Realizar pedido"
                        action={handleCheckout}
                        disabled={isLoading}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Cart;
