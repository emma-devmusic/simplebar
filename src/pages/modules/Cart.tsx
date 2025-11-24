import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useEffect, useState } from 'react';
import {
    emptyCart,
    ProductCart,
    removeProduct,
    setCart,
} from '../../redux/slices/cartSlice';
import { uiModal } from '../../redux/slices/uiSlice';
import {
    setSelectedProduct,
    setVariationSelected,
} from '../../redux/slices/productSlice';
import { OrderModeSelector, CartTable } from './Cart/index';
import { useForm } from '../../hooks/useForm';
import { formValidate } from '../../common/helpers';
import { FormsInputs, ObjectErrorsMessages } from '../../types/form';
import { Button, Input } from '../../components';
import { executeApiCall } from '../../services/executeApiCall';
import { fetchData } from '../../services/fetchData';
import { OrderCreate } from '../../types/orders';
import { useParams } from 'react-router-dom';

const initialState = {
    fullname: '',
    phone: '',
    email: '',
    destination_address: '',
};

const Cart = () => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const { products } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    const { tenant_path, branch_path } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [orderMode, setOrderMode] = useState<'delivery' | 'pickup'>(
        'delivery'
    );
    const [flag, setFlag] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState({} as ObjectErrorsMessages);

    const [values, handleInputChange, reset] = useForm(initialState);

    useEffect(() => {
        const msgs = formValidate(
            values as FormsInputs,
            orderMode === 'delivery'
                ? ['fullname', 'phone', 'destination_address']
                : ['fullname', 'phone']
        );
        setErrorMsg(msgs);
    }, [values, orderMode]);

    useEffect(() => {
        const cart_state_json = localStorage.getItem('cart_state');
        if (cart_state_json) {
            try {
                const cart_state = JSON.parse(cart_state_json);
                dispatch(setCart(cart_state));
            } catch (error) {
                console.error('Invalid JSON in localStorage:', error);
            }
        }
    }, [dispatch]);

    const handleEditProduct = (cartProduct: ProductCart) => {
        const productIndex = products.findIndex((prod) =>
            prod.product_variations.some(
                (item) => item.id === cartProduct.product.id
            )
        );
        const variationIndex = products[
            productIndex
        ].product_variations.findIndex(
            (item) => item.id === cartProduct.product.id
        );

        dispatch(setVariationSelected(variationIndex));
        dispatch(
            uiModal({
                modalFor: 'edit_product',
                modalTitle: cartProduct.product.name,
            })
        );
        dispatch(setSelectedProduct(products[productIndex]));
    };

    const handleRemoveProduct = (productId: number) => {
        dispatch(removeProduct(productId));
    };

    const handleCheckout = async () => {
        setFlag(true);
        if (errorMsg.hasErrors) return;

        try {
            const orderPayload: OrderCreate = {
                type: orderMode,
                customer: {
                    fullname: values.fullname,
                    phone: values.phone,
                    email: values.email || undefined,
                },
                items: cartProducts.map((item) => ({
                    product_variation_id: item.product.id,
                    name: item.product.name,
                    unit_price: item.product.price,
                    quantity: item.quantity,
                })),
            };
            if (orderMode === 'delivery') {
                orderPayload['shipment'] = {
                    destination_address: {
                        address: values.destination_address,
                    },
                    shipping_cost: 0,
                };
            }

            await executeApiCall(
                setIsLoading,
                () =>
                    fetchData(
                        `/pub-sls/orders/${tenant_path}/${branch_path}`,
                        'POST',
                        orderPayload
                    ),
                dispatch,
                () => {
                    reset(initialState);
                    setFlag(false);
                    dispatch(emptyCart());
                },
                '¡Pedido realizado con éxito!'
            );
        } catch (error) {
            console.error('Error al finalizar la compra:', error);
        }
    };

    return (
        <div className="flex w-full flex-col gap-4">
            <OrderModeSelector
                orderMode={orderMode}
                setOrderMode={setOrderMode}
            />
            <Input
                disabled={isLoading}
                label="Nombre"
                placeholder="Juan..."
                name="fullname"
                type="text"
                value={values?.fullname}
                onChange={handleInputChange}
                errorMsg={flag ? errorMsg.fullname : ''}
                required
            />
            <Input
                disabled={isLoading}
                label="Teléfono"
                placeholder="3624000000"
                name="phone"
                type="text"
                value={values?.phone}
                onChange={handleInputChange}
                errorMsg={flag ? errorMsg.phone : ''}
                required={values.fullname && values.email ? true : false}
            />
            {orderMode === 'delivery' && (
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
            )}
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
            <CartTable
                orderMode={orderMode}
                onEditProduct={handleEditProduct}
                onRemoveProduct={handleRemoveProduct}
            />

            {cartProducts.length > 0 ? (
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
