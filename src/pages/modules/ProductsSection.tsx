import { RootState, useAppSelector } from '../../redux/store';
import Product from './Product';

const ProductsSection = () => {
    const { products, filteredProducts } = useAppSelector((state:RootState) => state.products);
    return (
        <div className="flex h-full w-full flex-col gap-2 py-2">
            {products && filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                    <div
                        id={`${item.subCategory.id}`}
                        key={item.subCategory.id}
                        className="w-full"
                    >
                        <p className="text-lg font-bold pl-2">
                            {item.subCategory.name}
                        </p>
                        <div className="flex w-full flex-wrap">
                            {item.products.map((prod, index) => (
                                <Product
                                    product={prod}
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="flex h-full w-full flex-col items-center gap-2 px-4 py-4 pt-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={'4rem'}
                        viewBox="0 0 23 24"
                        className="text-gray-300"
                    >
                        <path
                            fill="currentColor"
                            d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                        ></path>
                    </svg>
                    <p className="">No se encontraron productos</p>
                </div>
            )}
        </div>
    )
}

export default ProductsSection