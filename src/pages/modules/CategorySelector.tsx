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
        <div className="flex h-10 items-start justify-start gap-1 overflow-x-auto bg-gray-50 px-1">
            <div
                id={`all`}
                onClick={() => {
                    setSearchParams("");
                }}
                className={`flex h-8 w-auto shadow-sm px-4 cursor-pointer rounded-b-3xl
                            ${searchParams.get('category') ? 'bg-sky-200' : 'h-9 items-center bg-sky-300 md:h-10'} 
                            transition-all duration-300`}
            >
                <p className={`text-lg text-nowrap font-semibold text-white`}>
                    Todos
                </p>
            </div>
            {categories.length > 0 &&
                categories.map((category) => (
                    <div
                        id={`cat-${category.id}`}
                        onClick={() => handleCategoryClick(`${category.id}`)}
                        key={category.id}
                        className={`flex h-8 w-auto shadow-sm px-4 cursor-pointer rounded-b-3xl
                            ${String(category.id) === String(searchParams.get('category')) ? 'h-9 items-center bg-sky-300 md:h-10' : 'bg-sky-200'} 
                            transition-all duration-300`}
                    >
                        <p className={`text-lg text-nowrap font-semibold text-white`}>
                            {category.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default CategorySelector;
