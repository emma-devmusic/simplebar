import React from 'react';

interface BadgeProps {
    variant?: 'solid' | 'outlined';
    color?: 'purple' | 'blue' | 'green' | 'red' | 'yellow';
    text?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    variant = 'solid',
    color = 'purple',
    text,
    children,
    className
}) => {
    const baseClasses = 'whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs' + (className ? ` ${className}` : '');
    const colorClasses = {
        purple: {
            solid: 'bg-purple-100 text-purple-700',
            outlined: 'border border-purple-500 text-purple-700',
        },
        blue: {
            solid: 'bg-blue-100 text-blue-700',
            outlined: 'border border-blue-500 text-blue-700',
        },
        green: {
            solid: 'bg-green-100 text-green-700',
            outlined: 'border border-green-500 text-green-700',
        },
        red: {
            solid: 'bg-red-100 text-red-700',
            outlined: 'border border-red-500 text-red-700',
        },
        yellow: {
            solid: 'bg-yellow-100 text-yellow-700',
            outlined: 'border border-yellow-500 text-yellow-700',
        },
    };

    const classes = `${baseClasses} ${colorClasses[color][variant]}`;

    return <span className={classes}>{children || text}</span>;
};