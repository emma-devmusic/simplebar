import { Input, Spinner } from '../components';
import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';
import { Search } from 'lucide-react';
import CategorySelector from './modules/CategorySelector';
import Product from './modules/Product';
import SubCategorySelector from './modules/SubCategorySelector';
import Cart from './modules/Cart';
import { LayoutView } from '../components/layout';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getCategories } from '../redux/slices/categorySlice';
import { getProducts, setFilteredProducts } from '../redux/slices/productSlice';
import { useParams } from 'react-router-dom';

export const Dash = () => {
    const { branch_path } = useParams();
    const { categories, selectedCategory } = useAppSelector(
        (state) => state.categories
    );
    const { products, filteredProducts } = useAppSelector(
        (state) => state.products
    );
    const dispatch = useAppDispatch();

    const [value, handleInputChange] = useForm({
        search: '',
    });

    useEffect(() => {
        // dispatch(getCategories(`{tenant_path+'/'+branch_path}`));
        // dispatch(getProducts(`{tenant_path+'/'+branch_path}`));
        dispatch(getCategories('/data/Categories.json'));
        dispatch(getProducts('/data/Products.json'));
        if (branch_path) {
            localStorage.setItem('branch_path', branch_path);
        }
    }, []);

    useEffect(() => {
        if(selectedCategory){
            dispatch(
                setFilteredProducts({
                    filterText: value.search,
                    selectedCategory: selectedCategory,
                })
            );
        }
    }, [value.search, selectedCategory]);

    return (
        <div className="flex w-full flex-col gap-2 lg:flex-row">
            {categories.length && products.length ? (
                <div className="relative flex w-full flex-col gap-2 shadow-sm lg:w-4/2">
                    <div className="sticky top-0 w-full bg-gray-50 shadow-sm">
                        <CategorySelector />
                        <SubCategorySelector />
                        <div className="px-4 py-2">
                            <div className="relative flex w-full items-center">
                                <Input
                                    label="Busca tus productos"
                                    className="rounded-lg bg-gray-50"
                                    isFloatingLabel
                                    placeholder="Hamburguesa"
                                    name="search"
                                    value={value.search}
                                    onChange={handleInputChange}
                                    size="sm"
                                    inputClass="rounded-lg"
                                    labelClass="rounded-lg !bg-gray-50"
                                    type="text"
                                    iconPosition="left"
                                />
                                <Search className="absolute right-3.5 h-4 w-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-full flex-col gap-2 px-4 py-4 pt-2">
                        {filteredProducts &&
                            filteredProducts?.map((item) => (
                                <div
                                    id={`${item.subCategory.id}`}
                                    key={item.subCategory.id}
                                    className="w-full"
                                >
                                    <p className="text-lg font-bold">
                                        {item.subCategory.name}
                                    </p>
                                    <div className="grid w-full grid-cols-1 gap-x-4 md:grid-cols-2">
                                        {item.products.map((prod, index) => (
                                            <Product
                                                product={prod}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ) : (
                <div className="flex min-h-48 w-full items-center justify-center lg:w-4/2">
                    <Spinner />
                </div>
            )}
            <div className="relative hidden w-full flex-col gap-2 px-4 lg:flex">
                <div className="sticky top-0">
                    <LayoutView title="Mi pedido">
                        <Cart />
                    </LayoutView>
                </div>
            </div>
        </div>
    );
};
