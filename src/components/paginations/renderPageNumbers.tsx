export const renderPageNumbers = (
    totalPages: number,
    handlePageClick: (e: number) => void,
    page: number
) => {
    const pageNeighbours = 1; // Número de páginas a cada lado de la actual
    const totalNumbers = pageNeighbours * 2 + 3; // Primera, última y vecinos

    // Si totalPages es menor o igual a totalNumbers, muestra todos
    if (totalPages <= totalNumbers) {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
                <li key={pageNumber}>
                    <button
                        onClick={() => handlePageClick(pageNumber)}
                        className={`block size-8 rounded-sm border ${
                            pageNumber === page
                                ? 'border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover'
                                : 'border-gray-100 bg-white text-gray-600 hover:bg-gray-100'
                        } text-center leading-8 hover:cursor-pointer`}
                    >
                        {pageNumber}
                    </button>
                </li>
            )
        );
    }

    const pages: (number | string)[] = [];
    pages.push(1); // Siempre muestra la primera página

    const leftBound = Math.max(2, page - pageNeighbours);
    const rightBound = Math.min(totalPages - 1, page + pageNeighbours);

    if (leftBound > 2) {
        pages.push('...');
    }

    for (let i = leftBound; i <= rightBound; i++) {
        pages.push(i);
    }

    if (rightBound < totalPages - 1) {
        pages.push('...');
    }

    pages.push(totalPages); // Siempre muestra la última página

    return pages.map((p, idx) => {
        if (p === '...') {
            return (
                <li key={`ellipsis-${idx}`}>
                    <span className="block size-8 rounded-sm border border-gray-100 bg-white text-center leading-8 text-gray-600">
                        {p}
                    </span>
                </li>
            );
        }
        return (
            <li key={p}>
                <button
                    onClick={() => handlePageClick(p as number)}
                    className={`block size-8 rounded-sm border ${
                        p === page
                            ? 'border-primary bg-primary text-white hover:border-primary-hover hover:bg-primary-hover'
                            : 'border-gray-100 bg-white text-gray-600 hover:bg-gray-100'
                    } text-center leading-8 hover:cursor-pointer`}
                >
                    {p}
                </button>
            </li>
        );
    });
};
