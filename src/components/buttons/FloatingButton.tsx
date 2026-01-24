import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface FloatingButtonProps {
    icon?: LucideIcon;
    onClick: () => void;
    label?: string;
    className?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
    icon: Icon,
    onClick,
    label,
    className = '',
    position = 'bottom-right',
    variant = 'primary',
}) => {
    const positionClasses = {
        'bottom-right': 'bottom-6 right-6',
        'bottom-left': 'bottom-6 left-6',
        'top-right': 'top-6 right-6',
        'top-left': 'top-6 left-6',
    };

    return (
        <div className={`fixed ${positionClasses[position]} z-20 ${className}`}>
            <Button
                label={label || ''}
                action={onClick}
                variant={variant}
                icon={Icon ? <Icon size={24} /> : undefined}
                className="!shadow-lg hover:shadow-xl"
                title={label}
                tooltip={label}
                // size='sm'
            />
        </div>
    );
};

export default FloatingButton;
