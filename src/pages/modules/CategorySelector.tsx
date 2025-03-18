import { setSelectedCategory } from '../../redux/slices/categorySlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const CategorySelector = () => {
    const { categories, selectedCategory } = useAppSelector(
        (state) => state.categories
    );
    const dispatch = useAppDispatch();
    return (
        <div className="flex h-10 items-start justify-start gap-1 overflow-x-auto bg-gray-50 px-1">
            {categories.length > 0 &&
                categories.map((category) => (
                    <div
                        id={`${category.id}`}
                        onClick={() => {
                            window.location.href = `#${category.id}`;
                            dispatch(setSelectedCategory(category));
                        }}
                        key={category.id}
                        className={`flex h-8 w-full cursor-pointer shadow-sm md:justify-center ${category.id === selectedCategory?.id ? 'h-9 items-center bg-sky-300 md:h-10' : 'bg-sky-200'} rounded-b-3xl px-4 transition-all duration-300`}
                    >
                        <p className={`text-lg font-semibold text-white`}>
                            {category.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default CategorySelector;
