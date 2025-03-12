interface AlertBorderedProps {
    title: string;
    description: string;
    type: 'info' | 'danger' | 'warning' | 'success' | 'secondary';
    showIcon?: boolean
}

export const AlertBordered = ({ title, description, type, showIcon = true }: AlertBorderedProps) => {
    // Colores y estilos asociados a cada tipo
    const typeStyles = {
        info: {
            border: 'border-blue-500',
            background: 'bg-blue-50',
            text: 'text-blue-800',
            icon: 'text-blue-400',
        },
        danger: {
            border: 'border-red-500',
            background: 'bg-red-50',
            text: 'text-red-800',
            icon: 'text-red-400',
        },
        warning: {
            border: 'border-yellow-500',
            background: 'bg-yellow-50',
            text: 'text-yellow-800',
            icon: 'text-yellow-400',
        },
        success: {
            border: 'border-green-500',
            background: 'bg-green-50',
            text: 'text-green-800',
            icon: 'text-green-400',
        },
        secondary: {
            border: 'border-gray-500',
            background: 'bg-gray-50',
            text: 'text-gray-800',
            icon: 'text-gray-400',
        },
    };

    const { border, background, text, icon } = typeStyles[type];

    return (
        <div role="alert" className={`rounded-sm border-s-4 ${border} ${background} p-4`}>
            <div className={`flex items-center gap-2 ${text}`}>
                {
                    showIcon &&
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-5 ${icon}`}>
                        <path
                            fillRule="evenodd"
                            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                }
                <strong className="block font-medium">{title}</strong>
            </div>

            <p className={`mt-2 text-sm ${text}`}>
                {description}
            </p>
        </div>
    );
};