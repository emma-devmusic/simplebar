import { Button } from '../../../components';
import { OrderType } from '../../../types/orders';

interface OrderModeSelectorProps {
    orderMode: OrderType;
    setOrderMode: React.Dispatch<React.SetStateAction<OrderType>>;
}

export const OrderModeSelector = ({
    orderMode,
    setOrderMode,
}: OrderModeSelectorProps) => {
    return (
        <div className="mt-2 flex w-full justify-center">
            <Button
                label="Envío a domicilio"
                className="w-1/2 !rounded-e-none"
                action={() => setOrderMode('delivery')}
                variant={orderMode === 'delivery' ? 'primary' : 'secondary'}
            />
            <Button
                label="Para retirar"
                className="w-1/2 !rounded-s-none"
                action={() => setOrderMode('pickup')}
                variant={orderMode === 'pickup' ? 'primary' : 'secondary'}
            />
        </div>
    );
};
