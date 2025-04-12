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
        <div className="flex h-8 items-start justify-start gap-1.5 overflow-x-auto overflow-y-hidden bg-gray-50 px-1 pt-2 lg:pt-1">
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
