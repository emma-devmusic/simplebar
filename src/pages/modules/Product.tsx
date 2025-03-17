import { Card } from '../../components';
import { setSelectedProduct } from '../../redux/slices/productSlice';
import { uiModal } from '../../redux/slices/uiSlice';
import { useAppDispatch } from '../../redux/store';
import { Product as ProductType } from '../../types/product';

interface ProductProps {
    product: ProductType;
}

const Product = ({ product }: ProductProps) => {
    const dispatch = useAppDispatch();
    const addProductToCart = (product: ProductType) => {
        dispatch(
            uiModal({
                modalFor: 'add_product',
                modalOpen: true,
                modalTitle: product.name,
            })
        );
        dispatch(setSelectedProduct(product));
    };

    return (
        <div
            key={product.product_variations[0].id}
            className="flex w-full cursor-pointer flex-col gap-2 py-2"
            onClick={() => {
                addProductToCart(product);
            }}
        >
            <Card className="w-full rounded-lg">
                <Card.Body className="space-x-0 rounded-lg bg-white p-0 px-0 py-0 shadow-md">
                    <div className="flex h-24 max-h-24 w-full gap-2 rounded-lg md:flex-row">
                        <div className="flex w-3/5 flex-col items-start justify-between gap-y-2 rounded-b-xl px-4 py-1.5 text-gray-600">
                            <div className="flex w-full flex-col items-start">
                                <p className="truncate font-semibold">
                                    {product.product_variations[0].name}
                                </p>
                                <p className="line-clamp-2 w-full overflow-hidden text-justify text-xs">
                                    {product.product_variations[0].description}
                                </p>
                            </div>
                            <p className="text-right text-sm font-bold text-orange-400">
                                $
                                {product.product_variations[0].price.toLocaleString()}
                            </p>
                        </div>

                        {product.product_variations[0].productImages[0]
                            .url_image ? (
                            <img
                                className="h-24 max-h-24 w-2/5 rounded-e-lg object-cover"
                                src={
                                    product.product_variations[0]
                                        .productImages[0].url_image
                                }
                            />
                        ) : (
                            <div className="flex h-24 max-h-24 w-2/5 flex-col items-center justify-center rounded-e-lg">
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
                                <p className="text-xs">Imagen no disponible</p>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
