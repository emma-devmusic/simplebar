import { useAppSelector } from '../../redux/store';

const SubCategorySelector = () => {
    const { selectedCategory } = useAppSelector((state) => state.categories);

    return (
        <div className="flex h-8 items-start justify-start gap-1.5 overflow-x-auto overflow-y-hidden bg-gray-50 px-1 pt-2 lg:pt-1">
            {selectedCategory &&
                selectedCategory?.subcategories.map((sub_cat) => (
                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `#${sub_cat.id}`;
                        }}
                        key={sub_cat.id}
                        className={`flex h-8 cursor-pointer items-start justify-center rounded-t-2xl bg-slate-400 px-4 pt-0.5 text-nowrap md:items-center md:pt-0`}
                    >
                        <p
                            className={`text-center text-sm font-semibold text-white`}
                        >
                            {sub_cat.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default SubCategorySelector;
