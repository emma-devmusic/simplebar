import { useEffect, useState } from 'react';
import { Input } from '../form/Input';
import { MobilePaginations } from './MobilePaginations';
import { renderPageNumbers } from './renderPageNumbers';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    getQuery: (query: string) => void;
    limitElement?: number;
}

export const Pagination = ({
    currentPage = 1,
    totalPages,
    getQuery,
    limitElement = 10,
}: PaginationProps) => {
    const [page, setPage] = useState(currentPage);
    const [limit, setLimit] = useState(limitElement);

    const handlePrev = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage((prev) => prev + 1);
    };

    const handlePageClick = (num: number) => {
        setPage(num);
    };

    const handleLimitChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const newLimit = parseInt(e.target.value, 10) || 1;
        setLimit(newLimit);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams();
        searchParams.set('page', page.toString());
        searchParams.set('limit', limit.toString());
        getQuery(searchParams.toString());
    }, [page, limit, getQuery]);

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 justify-between border-t border-gray-200 pt-4">
            <div className="w-full">
                <div className="hidden sm:block">
                    <ol className="flex justify-start gap-1 text-xs font-medium">
                        <li>
                            <button
                                onClick={handlePrev}
                                disabled={page === 1}
                                className={`inline-flex size-8 items-center justify-center rounded-sm border ${
                                    page === 1
                                        ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400'
                                        : 'border-gray-100 bg-white text-gray-900 hover:bg-gray-100 hover:cursor-pointer'
                                } rtl:rotate-180`}
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
                        </li>
                        {renderPageNumbers(totalPages, handlePageClick, page)}
                        <li>
                            <button
                                onClick={handleNext}
                                disabled={page === totalPages}
                                className={`inline-flex size-8 items-center justify-center rounded-sm border ${
                                    page === totalPages
                                        ? 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 '
                                        : 'border-gray-100 bg-white text-gray-900 hover:bg-gray-100 hover:cursor-pointer'
                                } rtl:rotate-180`}
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
                        </li>
                    </ol>
                </div>
                <MobilePaginations
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    page={page}
                    totalPages={totalPages}
                />
            </div>

            {/* Selector de Límite */}
            <div className="mt-2 sm:mt-0">
                <Input
                    label="A mostrar"
                    name="limit"
                    type="number"
                    onChange={handleLimitChange}
                    value={limit}
                    size="sm"
                    isFloatingLabel
                    className="!w-[85px]"
                    min={1}
                />
            </div>
        </div>
    );
};
