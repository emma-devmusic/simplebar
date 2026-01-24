import React, { ChangeEvent } from 'react';
import { Input, Button } from '../../components';
import { Search } from 'lucide-react';

interface SimpleSearchBoxProps {
    value: string;
    onChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => void;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    inputClassName?: string;
    inputType?: string;
    showButton?: boolean;
    onSearch?: () => void;
    buttonLabel?: string;
    buttonClassName?: string;
    containerClassName?: string;
}

export const SimpleSearchBox: React.FC<SimpleSearchBoxProps> = ({
    value,
    onChange,
    placeholder = '',
    label = '',
    disabled = false,
    name = 'search',
    size = 'sm',
    className = '',
    inputClassName = '',
    inputType = 'text',
    showButton = false,
    onSearch,
    buttonLabel = 'Buscar',
    buttonClassName = '',
    containerClassName = '',
}) => {
    return (
        <div className={`flex w-full flex-col gap-2 min-[400px]:flex-row lg:items-center lg:gap-2 ${containerClassName}`}>
            <div className={`relative flex w-full items-center ${className}`}>
                <Input
                    label={label}
                    className={`w-full rounded-lg bg-gray-50 dark:bg-neutral-900 dark:text-white ${inputClassName}`}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    size={size}
                    inputClass="rounded-lg dark:bg-neutral-900 dark:text-white"
                    labelClass="rounded-lg !bg-gray-50 dark:!bg-neutral-900 dark:text-gray-300"
                    type={inputType}
                    iconPosition="left"
                    disabled={disabled}
                />
                <Search className="absolute right-3.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
            </div>
            {showButton && onSearch && (
                <Button
                    label={buttonLabel}
                    action={onSearch}
                    disabled={disabled || !value.trim()}
                    className={`w-full min-[400px]:w-auto ${buttonClassName}`}
                    size={size}
                />
            )}
        </div>
    );
};

export default SimpleSearchBox;
