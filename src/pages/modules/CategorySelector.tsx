import { categories_obj } from '../../common/mocks/products';

interface CategorySelectorProps {
    selectedCategoryId: string;
    setSelectedCategoryId: (arg: string) => void;
}

const CategorySelector = ({
    selectedCategoryId,
    setSelectedCategoryId,
}: CategorySelectorProps) => {
    return (
        <div className='flex h-10 items-start justify-start gap-1 overflow-x-auto px-1 bg-gray-50'>
            {categories_obj.length > 0 &&
                categories_obj.map((item) => (
                    <div
                        onClick={() => setSelectedCategoryId(item.id)}
                        key={item.id}
                        className={`flex shadow-sm md:justify-center cursor-pointer h-8 w-full ${item.id === selectedCategoryId ? 'bg-sky-300 md:h-10 h-9 items-center' : 'bg-sky-200'} rounded-b-3xl px-4 transition-all duration-300`}
                    >
                        <p className={`text-lg font-semibold text-white`}>
                            {item.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default CategorySelector;
