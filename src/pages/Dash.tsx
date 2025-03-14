import { Input } from '../components';
import { useForm } from '../hooks/useForm';
import { useEffect, useState } from 'react';
import { setSelectedProduct } from '../redux/slices/cartSlice';
import { Search } from 'lucide-react';
import {
    categories_obj,
    products_obj,
    subcategories_obj,
} from '../common/mocks/products';
import CategorySelector from './modules/CategorySelector';
import Product from './modules/Product';
import SubCategorySelector from './modules/SubCategorySelector';
import Cart from './modules/Cart';
import { LayoutView } from '../components/layout';

export const Dash = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

    const [value, handleInputChange] = useForm({
        search: '',
    });

    useEffect(() => {
        setSelectedCategoryId(categories_obj[0].id);
    }, []);

    return (
        <div className='flex w-full flex-col gap-2 lg:flex-row'>
            <div className='relative flex w-full flex-col gap-2 shadow-md lg:w-4/2'>
                <div className='sticky top-0 w-full bg-gray-50 shadow-lg'>
                    <CategorySelector
                        selectedCategoryId={selectedCategoryId}
                        setSelectedCategoryId={setSelectedCategoryId}
                    />
                    <SubCategorySelector
                        selectedCategoryId={selectedCategoryId}
                    />
                    <div className='px-4 py-2'>
                        <div className='relative flex w-full items-center'>
                            <Input
                                label='Busca tus productos'
                                className='rounded-lg bg-gray-50'
                                isFloatingLabel
                                placeholder='Hamburguesa'
                                name='search'
                                value={value.search}
                                onChange={handleInputChange}
                                size='sm'
                                inputClass='rounded-lg'
                                labelClass='rounded-lg !bg-gray-50'
                                type='text'
                                iconPosition='left'
                            />
                            <Search className='absolute right-3.5 h-4 w-4 text-gray-400' />
                        </div>
                    </div>
                </div>
                <div className='flex h-full w-full flex-col gap-2 px-4 py-4 pt-2'>
                    {subcategories_obj
                        .filter(
                            (item) => item.categoryId === selectedCategoryId
                        )
                        .map((subcat, index) => (
                            <div id={subcat.id} key={index} className='w-full'>
                                {products_obj.filter(
                                    (prod) =>
                                        prod.subcategory === subcat.name &&
                                        (prod.name
                                            .toLowerCase()
                                            .includes(
                                                value.search.toLowerCase()
                                            ) ||
                                            prod.description
                                                .toLowerCase()
                                                .includes(
                                                    value.search.toLowerCase()
                                                ))
                                ).length > 0 && (
                                    <p className='text-lg font-bold'>
                                        {subcat.name}
                                    </p>
                                )}
                                <div className='grid w-full grid-cols-1 gap-x-4 md:grid-cols-2'>
                                    {products_obj
                                        .filter(
                                            (prod) =>
                                                prod.subcategory ===
                                                    subcat.name &&
                                                (prod.name
                                                    .toLowerCase()
                                                    .includes(
                                                        value.search.toLowerCase()
                                                    ) ||
                                                    prod.description
                                                        .toLowerCase()
                                                        .includes(
                                                            value.search.toLowerCase()
                                                        ))
                                        )
                                        .map((prod) => (
                                            <Product
                                                key={prod.id}
                                                product={prod}
                                                setSelectedProduct={
                                                    setSelectedProduct
                                                }
                                            />
                                        ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className='hidden relative w-full flex-col gap-2 px-4 lg:flex'>
                <div className='sticky top-0'>
                    <LayoutView title='Mi pedido'>
                        <Cart />
                    </LayoutView>
                </div>
            </div>
        </div>
    );
};
