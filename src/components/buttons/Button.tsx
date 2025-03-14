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
        primary: 'border-primary bg-primary text-white hover:bg-primary-hover active:text-primary active:!text-gray-100',
        secondary: 'bg-gray-400 text-white border-gray-400',
        danger: 'bg-red-500 text-white',
        plain: 'bg-transparent border-transparent hover:bg-gray-100 !p-1 focus:!ring-0 focus:outline-none',
        ['plain-primary']: '!text-primary bg-transparent border-transparent hover:!text-primary-hover !p-1 focus:!ring-0 focus:outline-none',
        ['plain-danger']: 'text-danger bg-transparent border-transparent hover:!text-danger-hover !p-1 focus:!ring-0 focus:outline-none',
        ['primary-outline']: 'border-primary text-primary hover:text-white hover:bg-primary-hover',
        ['secondary-outline']: '',
        ['danger-outline']: 'border-red-500 text-red-500',
    }

    return (
        <button
            type={type || 'button'}
            className={`inline-block shrink-0 rounded border px-4.5 py-2.5 text-sm font-medium transition-all hover:cursor-pointer ${buttonVariants[variant]} focus:ring-1 ${className} active:translate-y-[1px] disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-200 disabled:active:translate-y-[0px]`}
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
