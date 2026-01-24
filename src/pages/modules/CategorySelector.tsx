import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

const CategorySelector = () => {
    const { categories } = useAppSelector((state) => state.categories);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleCategoryClick = (categoryId: string) => {
        searchParams.set('category', categoryId);
        setSearchParams(searchParams);
        window.location.href = `#cat-${categoryId}`;
    };

    return (
        <div
            className={`no-scrollbar flex min-h-10 items-start justify-start gap-1 overflow-x-auto overflow-y-hidden bg-gray-50 px-1 dark:border-[1px] dark:border-b-0 dark:border-neutral-800 dark:bg-neutral-950 ${!searchParams.size && 'pb-2'}`}
        >
            <div
                id={`all`}
                onClick={() => {
                    searchParams.delete('category');
                    setSearchParams(searchParams);
                }}
                className={`flex h-8 w-auto cursor-pointer rounded-b-xl px-4 shadow-sm ${searchParams.get('category') ? 'bg-sky-200 dark:bg-sky-900' : 'h-9 items-center bg-sky-300 md:h-10 dark:bg-sky-700'} transition-all duration-300`}
            >
                <p className={`text-lg font-semibold text-nowrap text-white`}>
                    Todos
                </p>
            </div>
            {categories.length > 0 &&
                categories.map((category) => (
                    <div
                        id={`cat-${category.id}`}
                        onClick={() => handleCategoryClick(`${category.id}`)}
                        key={category.id}
                        className={`flex h-8 w-auto cursor-pointer rounded-b-xl px-4 shadow-sm ${String(category.id) === String(searchParams.get('category')) ? 'h-9 items-center bg-sky-300 md:h-10 dark:bg-sky-700' : 'bg-sky-200 dark:bg-sky-900'} transition-all duration-300`}
                    >
                        <p
                            className={`text-lg font-semibold text-nowrap text-white`}
                        >
                            {category.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default CategorySelector;
