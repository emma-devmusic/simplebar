import { AlertTriangle, CheckCheck, InfoIcon, X } from 'lucide-react';
import { Button } from '../buttons/Button';
import { ActionButton } from '../../types/form';

interface DrawerProps {
    msg: string;
    typeMsg: string;
    close: () => void;
    title: string;
    actions?: ActionButton[];
    onAccept?: (() => void) | null;
    hasCancelButton: boolean;
    onCancel?: (() => void) | null;
}

export const DrawerMessage = ({
    close,
    msg,
    title,
    typeMsg,
    actions,
    onAccept,
    hasCancelButton,
    onCancel,
}: DrawerProps) => {
    return (
        <div className="my-3 flex h-full w-full flex-col items-center gap-8">
            {typeMsg === 'error' && (
                <X className="text-red-500 dark:text-red-400" size={60} />
            )}
            {typeMsg === 'info' && (
                <InfoIcon
                    className="text-blue-500 dark:text-blue-400"
                    size={60}
                />
            )}
            {typeMsg === 'success' && (
                <CheckCheck
                    className="text-green-600 dark:text-green-400"
                    size={50}
                />
            )}
            {typeMsg === 'warning' && (
                <AlertTriangle
                    className="text-yellow-600 dark:text-yellow-400"
                    size={60}
                />
            )}
            <div className="mb-2 flex flex-col gap-2 text-gray-700 dark:text-gray-200">
                {title && (
                    <h3 className="text-center text-3xl font-medium text-neutral-900 dark:text-neutral-100">
                        {title}
                    </h3>
                )}
                <p className="mx-auto max-w-[450px] text-center text-lg text-neutral-600 dark:text-neutral-300">
                    {msg}
                </p>
            </div>
            {actions && (
                <div className="flex gap-4">
                    {!actions ||
                        (actions?.length === 0 && (
                            <Button
                                label="Aceptar"
                                action={() => {
                                    if (onAccept) onAccept();
                                    close();
                                }}
                            />
                        ))}
                    {actions &&
                        actions.map((btn, i) => (
                            <Button
                                key={i}
                                action={btn.action}
                                label={btn.label}
                                className={btn.className}
                                disabled={btn.disabled}
                                icon={btn.icon}
                                type={btn.type}
                                variant={btn.variant}
                            />
                        ))}
                    {actions && hasCancelButton && (
                        <Button
                            action={() => {
                                close();
                                onCancel?.();
                            }}
                            label="Cancelar"
                            variant="primary-outline"
                        />
                    )}
                </div>
            )}
        </div>
    );
};
