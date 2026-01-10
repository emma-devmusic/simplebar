import { useAppSelector } from '../../redux/store';
import { CircleAlert, CircleCheck, CircleX, Info, X } from 'lucide-react';
import { Spinner } from '../shared/Spinner';

export const DrawerHeader = ({ close }: { close: () => void }) => {
    const {
        drawer: { typeMsg, drawerTitle },
    } = useAppSelector((state) => state.ui);

    return (
        <div className="flex items-center justify-between border-b border-gray-200 p-2 px-4 dark:border-neutral-800">
            <div className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white">
                {typeMsg === 'success' && (
                    <CircleCheck className="h-7 w-7 text-green-400" />
                )}
                {typeMsg === 'info' && (
                    <Info className="h-7 w-7 text-blue-400" />
                )}
                {typeMsg === 'warning' && (
                    <CircleAlert className="h-7 w-7 text-yellow-400" />
                )}
                {typeMsg === 'error' && (
                    <CircleX className="h-7 w-7 text-red-400" />
                )}
                {typeMsg === 'spinner' && <Spinner size={16} />}
                {drawerTitle}
            </div>
            <div
                className="cursor-pointer rounded-2xl p-3 text-sm hover:bg-background-hover dark:text-white dark:hover:bg-neutral-800"
                onClick={close}
            >
                <X />
            </div>
        </div>
    );
};
