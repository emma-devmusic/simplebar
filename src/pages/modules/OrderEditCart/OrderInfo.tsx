import { RootState, useAppSelector } from '../../../redux/store';

const OrderInfo = () => {
    const { currentOrder } = useAppSelector((state: RootState) => state.order);

    const notAvailableInformation =
        !(currentOrder?.customer || currentOrder?.customer_name) &&
        !currentOrder?.preparation_time &&
        !currentOrder?.notes;

    if (!currentOrder || notAvailableInformation) {
        return null;
    }

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 [&_div:last-of-type]:pb-0">
            <h3 className="text-md mb-2 font-semibold text-neutral-700 dark:text-neutral-300">
                Información de la orden
            </h3>
            {(currentOrder.customer || currentOrder.customer_name) && (
                <div className="space-y-1 pb-1 text-sm">
                    <p className="text-neutral-600 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                            Nombre:
                        </span>{' '}
                        {currentOrder.customer?.fullname ||
                            currentOrder.customer_name}
                    </p>
                    {currentOrder.customer?.phone && (
                        <p className="text-neutral-600 dark:text-neutral-400">
                            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                                Teléfono:
                            </span>{' '}
                            {currentOrder.customer.phone}
                        </p>
                    )}
                    {currentOrder.customer?.email && (
                        <p className="text-neutral-600 dark:text-neutral-400">
                            <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                                Email:
                            </span>{' '}
                            {currentOrder.customer.email}
                        </p>
                    )}
                </div>
            )}
            {currentOrder.preparation_time && (
                <div className="pb-1 text-sm">
                    <p className="text-neutral-600 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                            Preparación:
                        </span>{' '}
                        {currentOrder.preparation_time + '"'}
                    </p>
                </div>
            )}
            {currentOrder.notes && (
                <div className="pb-1 text-sm">
                    <p className="text-neutral-600 dark:text-neutral-400">
                        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                            Notas:
                        </span>{' '}
                        {currentOrder.notes}
                    </p>
                </div>
            )}
        </div>
    );
};

export default OrderInfo;
