import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { useEffect, useState } from 'react';
import { ItemSubcategories } from '../../types/categories';

const SubCategorySelector = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { products } = useAppSelector((state) => state.products);
    const { categories } = useAppSelector((state) => state.categories);
    const [subcategories, setSubcategories] = useState<ItemSubcategories[]>([]);

    const handleSubCategoryClick = (subCategoryId: string) => {
        searchParams.set('subCategory', subCategoryId);
        setSearchParams(searchParams);

        setTimeout(() => {
            const element = document.getElementById(
                `products-subcat-${subCategoryId}`
            );
            const stickyHeader = document.getElementById('sticky-div');

            if (element && stickyHeader) {
                document.documentElement.style.setProperty(
                    '--sticky-height',
                    `${stickyHeader.offsetHeight}px`
                );

                element.classList.add('scroll-target');

                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, 100);
    };

    useEffect(() => {
        const selectedCategory = searchParams.get('category');
        if (selectedCategory) {
            const category = categories.find(
                (cat) => cat.id === Number(selectedCategory)
            );

            if (category) {
                const filteredSubcategories = category?.subcategories?.filter(
                    (subCat) =>
                        products.some(
                            (product) => product.sub_category_id === subCat.id
                        )
                );
                setSubcategories(filteredSubcategories || []);
            }
        } else {
            const allSubcategories: ItemSubcategories[] = categories
                .flatMap((category) => category?.subcategories)
                .filter((subcategory): subcategory is ItemSubcategories =>
                    products.some(
                        (product) =>
                            product.sub_category_id === subcategory?.id &&
                            subcategory !== undefined
                    )
                );
            setSubcategories(allSubcategories);
        }
    }, [categories, products, searchParams]);

    if (!searchParams.get('category')) return null;

    return (
        <div className="no-scrollbar flex min-h-8 items-end justify-start gap-1 overflow-x-auto bg-gray-50 px-1 dark:border-[1px] dark:border-t-0 dark:border-b-0 dark:border-neutral-800 dark:bg-neutral-950">
            {subcategories.map((sub_cat) => (
                <div
                    id={`subcat-${sub_cat.id}`}
                    onClick={() => handleSubCategoryClick(`${sub_cat.id}`)}
                    key={sub_cat.id}
                    className={`flex h-6 cursor-pointer items-center rounded-t-2xl bg-slate-400 px-4 dark:bg-slate-700`}
                >
                    <p
                        className={`text-sm font-semibold text-nowrap text-white`}
                    >
                        {sub_cat.name}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SubCategorySelector;
