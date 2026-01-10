import { NoContent } from '../../components/NoContent';
import { RootState, useAppSelector } from '../../redux/store';
import Product from './Product';

const ProductsSection = () => {
    const { products, filteredProducts } = useAppSelector(
        (state: RootState) => state.products
    );
    return (
        <div className="flex h-full w-full flex-col gap-2 py-2">
            {products && filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                    <div
                        id={`products-subcat-${item.subCategory.id}`}
                        key={item.subCategory.id}
                        className="w-full"
                    >
                        <p className="pl-2 text-lg font-bold dark:text-white">
                            {item.subCategory.name}
                        </p>
                        <div className="flex w-full flex-wrap">
                            {item.products.map((prod, index) => (
                                <Product product={prod} key={index} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <NoContent message="No se encontraron productos" />
            )}
        </div>
    );
};

export default ProductsSection;
