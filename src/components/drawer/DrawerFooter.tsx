import { ActionButton } from '../../types/form';
import { Button } from '../buttons/Button';

export const DrawerFooter = ({ actions }: { actions: ActionButton[] }) => {
    return (
        <div className="flex justify-end gap-4 border-t border-gray-200 p-4 dark:border-neutral-800">
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
        </div>
    );
};
