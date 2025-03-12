

interface MobilePaginationsProps {
    handlePrev: () => void;
    handleNext: () => void;
    page: number;
    totalPages: number;
}

export const MobilePaginations = ({
    handlePrev,
    page,
    totalPages,
    handleNext
}: MobilePaginationsProps) => {
    return (
        <div className="flex items-center justify-between sm:hidden">
            <button
                onClick={handlePrev}
                disabled={page === 1}
                className={`inline-flex size-8 items-center justify-center rounded-sm border ${
                    page === 1
                        ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400'
                        : 'border-gray-100 bg-white text-gray-900'
                }`}
                aria-label="Página anterior"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <span className="mx-2 text-xs font-medium">
                Página {page} de {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={page === totalPages}
                className={`inline-flex size-8 items-center justify-center rounded-sm border ${
                    page === totalPages
                        ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400'
                        : 'border-gray-100 bg-white text-gray-900'
                }`}
                aria-label="Página siguiente"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    );
};
