import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useState } from 'react';
import { Button } from '../../components';
import { Trash2Icon } from 'lucide-react';
import { removeProduct } from '../../redux/slices/cartSlice';
import Swal from 'sweetalert2';

const Cart = () => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const [orderMode, setOrderMode] = useState<'domicilio' | 'retiro'>(
        'domicilio'
    );
    const dispatch = useAppDispatch();
    return (
        <div className="flex w-full flex-col gap-2">
            {cartProducts.length > 0 && (
                <div className="mt-2 flex w-full justify-center">
                    <Button
                        label="Envío a domicilio"
                        className="w-1/2 !rounded-e-none"
                        action={() => {
                            setOrderMode('domicilio');
                        }}
                        variant={
                            orderMode === 'domicilio' ? 'primary' : 'secondary'
                        }
                    />
                    <Button
                        label="Para retirar"
                        className="w-1/2 !rounded-s-none"
                        action={() => {
                            setOrderMode('retiro');
                        }}
                        variant={
                            orderMode === 'retiro' ? 'primary' : 'secondary'
                        }
                    />
                </div>
            )}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="w-full text-left">
                        <tr>
                            <th className="px-4 py-2 font-medium whitespace-nowrap text-gray-900">
                                Producto
                            </th>
                            <th className="px-4 py-2 text-right font-medium whitespace-nowrap text-gray-900">
                                Precio ($)
                            </th>
                        </tr>
                    </thead>

                    <tbody className="w-full divide-y divide-gray-200">
                        {cartProducts.length > 0 &&
                            cartProducts.map((item, index: number) => (
                                <tr key={index}>
                                    <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                                        {item.product.name}
                                    </td>
                                    <td className="flex w-full items-center justify-end py-2 text-center whitespace-nowrap text-gray-700">
                                        <span>
                                            $
                                            {(
                                                Number(item.product.price) *
                                                item.quantity
                                            ).toLocaleString()}
                                        </span>
                                        <span className="ml-2 pt-0.5 text-xs text-gray-700">
                                            ($
                                            {Number(
                                                item.product.price
                                            ).toLocaleString()}{' '}
                                            x {item.quantity})
                                        </span>
                                        <Button
                                            action={() => {
                                                Swal.fire({
                                                    title: '¿Deseas eliminar el elemento del pedido?',
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    reverseButtons: true,
                                                    cancelButtonColor:
                                                        '#006ce7',
                                                    cancelButtonText:
                                                        'No, cancelar',
                                                    confirmButtonColor:
                                                        '#fb2c36',
                                                    confirmButtonText:
                                                        'Sí, eliminar',
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Swal.fire({
                                                            title: 'Eliminado!',
                                                            text:'El elemento ha sido eliminado del pedido.',
                                                            confirmButtonColor: '#006ce7',
                                                        });
                                                        dispatch(
                                                            removeProduct(
                                                                item.product.id
                                                            )
                                                        );
                                                    }
                                                });
                                            }}
                                            icon={
                                                <Trash2Icon className="h-4 w-4 text-red-500" />
                                            }
                                            variant="plain-danger"
                                            label=""
                                            className="hover:bg-red-100 lg:mx-2"
                                        />
                                    </td>
                                </tr>
                            ))}
                        {cartProducts.length > 0 && (
                            <tr>
                                <td className="px-4 py-2 whitespace-nowrap text-gray-400">
                                    Resumen
                                </td>
                                <td
                                    colSpan={2}
                                    className="px-4 py-2 text-right whitespace-nowrap text-gray-700"
                                >
                                    <span>
                                        $
                                        {cartProducts
                                            .reduce(
                                                (acc, item) =>
                                                    acc +
                                                    Number(item.product.price) *
                                                        item.quantity,
                                                0
                                            )
                                            .toLocaleString()}
                                    </span>
                                </td>
                            </tr>
                        )}
                        {orderMode === 'domicilio' &&
                            cartProducts.length > 0 && (
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap text-gray-400">
                                        Costo de envío
                                    </td>
                                    <td
                                        colSpan={2}
                                        className="px-4 py-2 text-right whitespace-nowrap text-gray-700"
                                    >
                                        <span>$1000</span>
                                    </td>
                                </tr>
                            )}
                        {cartProducts.length > 0 && (
                            <tr>
                                <td className="px-4 py-2 whitespace-nowrap text-gray-800">
                                    Total
                                </td>
                                <td
                                    colSpan={2}
                                    className="px-4 py-2 text-right whitespace-nowrap text-gray-700"
                                >
                                    <span>
                                        $
                                        {(
                                            cartProducts.reduce(
                                                (acc, item) =>
                                                    acc +
                                                    Number(item.product.price) *
                                                        item.quantity,
                                                0
                                            ) +
                                            (orderMode === 'domicilio'
                                                ? 1000
                                                : 0)
                                        ).toLocaleString()}
                                    </span>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {cartProducts.length <= 0 && (
                    <div className="flex h-24 w-full flex-col items-center justify-center rounded-e-lg py-2 text-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 23 24"
                            className="h-24 text-gray-300"
                        >
                            <path
                                fill="currentColor"
                                d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                            ></path>
                        </svg>

                        <p className="text-sm">Pedido vacío</p>
                    </div>
                )}
            </div>
            <div className="flex w-full justify-center">
                {cartProducts.length > 0 && (
                    <Button
                        label="Finalizar compra"
                        action={() => {
                            console.log({
                                pedido: cartProducts,
                                modo: orderMode,
                                ammount: (
                                    cartProducts.reduce(
                                        (acc, item) =>
                                            acc +
                                            Number(item.product.price) *
                                                item.quantity,
                                        0
                                    ) + (orderMode === 'domicilio' ? 1000 : 0)
                                ).toLocaleString(),
                            });
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Cart;
