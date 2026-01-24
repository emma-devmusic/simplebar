import { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { get_order_by_id } from '../../redux/slices/orderSlice';
import {
    uiCloseModal,
    uiCloseDrawer,
    uiDrawer,
} from '../../redux/slices/uiSlice';
import SimpleSearchBox from './SimpleSearchBox';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface OrderSearchProps {
    closeAction?: 'modal' | 'drawer';
}

export const OrderSearch = ({ closeAction = 'modal' }: OrderSearchProps) => {
    const isMobile = useMediaQuery('(max-width: 1024px)');
    const [orderSearchValue, setOrderSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { tenant_path, branch_path } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleOrderSearch = () => {
        if (!tenant_path || !branch_path || !orderSearchValue.trim()) return;

        dispatch(
            get_order_by_id({
                path: `${tenant_path}/${branch_path}`,
                order_number: Number(orderSearchValue),
                setIsLoading,
                navigate,
                onSuccess: () => {
                    // Close search modal/drawer and open edit_cart drawer
                    if (closeAction === 'modal') {
                        dispatch(uiCloseModal());
                    } else {
                        dispatch(uiCloseDrawer());
                    }
                    if (isMobile) {
                        setTimeout(() => {
                            dispatch(
                                uiDrawer({
                                    drawerFor: 'edit_cart',
                                    drawerTitle: `Editar orden #${orderSearchValue}`,
                                    size: 'full',
                                    orientation: 'bottom',
                                })
                            );
                        }, 300);
                    }
                },
            })
        );
        setOrderSearchValue('');
    };

    const handleOrderInputChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setOrderSearchValue(e.target.value);
    };

    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Ingresa el número de tu orden para agregar más productos.
            </p>
            <SimpleSearchBox
                value={orderSearchValue}
                onChange={handleOrderInputChange}
                placeholder="Ingresa el número de orden"
                name="orderSearch"
                inputType="number"
                showButton={true}
                buttonClassName="!py-2"
                onSearch={handleOrderSearch}
                buttonLabel="Buscar"
                disabled={isLoading}
                size="md"
                containerClassName="flex-col"
            />
        </div>
    );
};

export default OrderSearch;
