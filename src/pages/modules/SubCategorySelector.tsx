import { SetURLSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

interface SubCategorySelectorProps {
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
}

const SubCategorySelector = ({
    searchParams,
    setSearchParams,
}: SubCategorySelectorProps) => {
    const { products } = useAppSelector((state) => state.products);
    const { categories } = useAppSelector((state) => state.categories);

    const handleSubCategoryClick = (subCategoryId: string) => {
        searchParams.set('subCategory', subCategoryId);
        setSearchParams(searchParams);
        window.location.href = `#subcat-${subCategoryId}`;
    };

    return (
        <div className="flex h-8 items-end justify-start gap-1 overflow-x-auto bg-gray-50 px-1">
            {categories
                .find(
                    (category) =>
                        category.id === Number(searchParams.get('category'))
                )
                ?.subcategories?.filter((sub_categorie) =>
                    products.some(
                        (product) =>
                            product.sub_category_id === sub_categorie.id
                    )
                )
                .map((sub_cat) => (
                    <div
                        id={`subcat-${sub_cat.id}`}
                        onClick={() => handleSubCategoryClick(`${sub_cat.id}`)}
                        key={sub_cat.id}
                        className={`flex h-6 cursor-pointer items-center rounded-t-2xl bg-slate-400 px-4`}
                    >
                        <p
                            className={`text-sm font-semibold text-white text-nowrap`}
                        >
                            {sub_cat.name}
                        </p>
                    </div>
                ))}
        </div>
    );
};

export default SubCategorySelector;
