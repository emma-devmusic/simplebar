export interface ButtonProps {
    label: string;
    action: (e: any) => void;
    type?: 'button' | 'submit';
    className?: string; // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="
    variant?: 'primary' | 'secondary' | 'danger' | 'primary-outline' | 'danger-outline' | 'secondary-outline' | 'plain' | 'plain-primary' | 'plain-danger';
    disabled?: boolean; // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable
    icon?: React.ReactNode; // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional prop to add an icon to the button. Example: icon={<Icon />}  // Optional
    iconPosition?: 'left' | 'right'
}

type ButtonVariants = {
    primary: string;
    secondary: string;
    danger: string;
    ['primary-outline']: string;
    ['secondary-outline']: string;
    ['danger-outline']: string;
    plain: string;
    ['plain-primary']: string;
    ['plain-danger']: string;
}

export const Button = ({ label, action, className, type, variant = 'primary', disabled, icon, iconPosition = 'left' }: ButtonProps) => {

    const buttonVariants: ButtonVariants = {
        primary: 'border-primary bg-primary text-white hover:bg-primary-hover active:text-primary active:!text-gray-100 dark:bg-primary dark:text-neutral-900 dark:hover:bg-primary-hover dark:active:text-neutral-900',
        secondary: 'bg-gray-400 text-white border-gray-400 dark:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-700',
        danger: 'bg-red-500 text-white dark:bg-red-600 dark:text-neutral-100',
        plain: 'bg-transparent border-transparent hover:bg-gray-100 !p-1 focus:!ring-0 focus:outline-none dark:hover:bg-neutral-800 dark:text-neutral-100',
        ['plain-primary']: '!text-primary bg-transparent border-transparent hover:!text-primary-hover !p-1 focus:!ring-0 focus:outline-none dark:text-primary dark:hover:!text-primary-hover',
        ['plain-danger']: 'text-danger bg-transparent border-transparent hover:!text-danger-hover !p-1 focus:!ring-0 focus:outline-none dark:text-red-400 dark:hover:!text-danger-hover',
        ['primary-outline']: 'border-primary text-primary hover:text-white hover:bg-primary-hover dark:border-primary dark:text-primary dark:hover:bg-primary-hover dark:hover:text-neutral-900',
        ['secondary-outline']: 'border-neutral-400 text-neutral-700 dark:border-neutral-700 dark:text-neutral-100',
        ['danger-outline']: 'border-red-500 text-red-500 dark:border-red-600 dark:text-red-400',
    }

    return (
        <button
            type={type || 'button'}
            className={`inline-block shrink-0 rounded-md border px-4.5 py-2.5 text-sm font-medium transition-all hover:cursor-pointer ${buttonVariants[variant]} focus:ring-1 ${className} active:translate-y-[1px] disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-200 disabled:active:translate-y-[0px] dark:disabled:bg-neutral-800 dark:disabled:border-neutral-800 dark:disabled:text-neutral-600`}
            onClick={action}
            disabled={disabled}
        >
            <div className={`flex items-center justify-center gap-1 ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
                <div className={`${!label && 'ml-1'}`}>
                    {icon && icon}
                </div>
                <span className='flex items-center'>
                    {label}
                </span>
            </div>
        </button>
    );
};
