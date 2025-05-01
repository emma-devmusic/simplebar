import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { useEffect, useState } from 'react';
import { ItemSubcategories } from '../../types/categories';

const SubCategorySelector = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { products } = useAppSelector((state) => state.products);
    const { categories } = useAppSelector((state) => state.categories);
    const [subcategories, setSubcategories] = useState<ItemSubcategories[]>([])

    const handleSubCategoryClick = (subCategoryId: string) => {
        searchParams.set('subCategory', subCategoryId);
        setSearchParams(searchParams);
        window.location.href = `#subcat-${subCategoryId}`;
    };

    useEffect(() => {
        const selectedCategory = searchParams.get('category');
        if (selectedCategory) {
            const category = categories.find(
                (cat) => cat.id === Number(selectedCategory)
            );

            if (category) {
                const filteredSubcategories = category?.subcategories?.filter((subCat) =>
                    products.some((product) => product.sub_category_id === subCat.id)
                );
                setSubcategories(filteredSubcategories || []);
            }
        } else {
            const allSubcategories: ItemSubcategories[] = categories
                .flatMap((category) => category?.subcategories)
                .filter((subcategory): subcategory is ItemSubcategories =>
                    products.some((product) => product.sub_category_id === subcategory?.id && subcategory !== undefined)
                )
            setSubcategories(allSubcategories);
        }
    }, [categories, products, searchParams]);

    return (
        <div className="flex h-8 items-end justify-start gap-1 overflow-x-auto bg-gray-50 px-1">
            {subcategories.map((sub_cat) => (
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
