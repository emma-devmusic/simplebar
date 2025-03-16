import { subcategories_obj } from '../../common/mocks/products';

const SubCategorySelector = ({ selectedCategoryId }: any) => {
    return (
        <div className='flex h-8 items-start justify-start gap-1.5 overflow-x-auto px-1 pt-2 overflow-y-hidden bg-gray-50'>
            {subcategories_obj
                .filter((subcat) => subcat.categoryId === selectedCategoryId)
                .map((item) => (
                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `#${item.id}`;
                        }}
                        key={item.id}
                        className={`flex h-8 rounded-t-2xl justify-center  cursor-pointer text-nowrap px-4 items-start md:items-center pt-0.5 md:pt-0 bg-slate-400`}
                    >
                        <p className={`font-semibold text-sm text-center text-white`}>
                            {item.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default SubCategorySelector;
