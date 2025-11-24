import { Copy } from 'lucide-react';
import { Card } from '../../components';
import { setSelectedProduct, setVariationSelected } from '../../redux/slices/productSlice';
import { uiModal } from '../../redux/slices/uiSlice';
import { useAppDispatch } from '../../redux/store';
import { Product as ProductType } from '../../types/product';
import { useEffect, useRef, useState } from 'react';
import useValidateImage from '../../hooks/useValidateImage';

interface ProductProps {
    product: ProductType;
}

const Product = ({ product }: ProductProps) => {
    const dispatch = useAppDispatch();
    const { imageError, imagePath, setImagePath } = useValidateImage({
        initialPath: '',
    });

    const [descriptionClamp, setDescriptionClamp] = useState(3);
    const nameRef = useRef<HTMLParagraphElement>(null);

    const addProductToCart = (product: ProductType) => {
        dispatch(
            uiModal({
                modalFor: 'add_product',
                modalTitle: product.name,
            })
        );
        dispatch(setSelectedProduct(product));
        dispatch(setVariationSelected(0));
    };

    useEffect(() => {
        if (
            product.product_variations[0]?.productImages.some(
                (img) => img.main_image
            )
        ) {
            setImagePath(
                product.product_variations[0]?.productImages.find(
                    (img) => img.main_image
                )?.url_image as string
            );
        } else {
            setImagePath(
                product.product_variations[0]?.productImages[0]?.url_image
            );
        }
    }, []);

    useEffect(() => {
        const updateClamp = () => {
            if (nameRef.current) {
                const lineHeight = parseFloat(
                    window.getComputedStyle(nameRef.current).lineHeight
                );
                const nameHeight = nameRef.current.offsetHeight;
    
                if (nameHeight > lineHeight) {
                    setDescriptionClamp(2);
                } else {
                    setDescriptionClamp(3);
                }
            }
        };
    
        updateClamp();
    
        window.addEventListener('resize', updateClamp);
    
        return () => {
            window.removeEventListener('resize', updateClamp);
        };
    }, []);

    return (
        <div
            key={product.product_variations[0].id}
            className="flex w-full cursor-pointer p-2 md:w-1/2"
            onClick={() => {
                addProductToCart(product);
            }}
        >
            <Card className="w-full rounded-lg dark:bg-neutral-900 dark:border-[1px] dark:border-neutral-800">
                <Card.Body className="rounded-lg bg-white !p-0 dark:bg-neutral-900">
                    <div className="flex h-28 min-h-28 w-full gap-2 rounded-lg md:flex-row lg:h-32 lg:min-h-32">
                        <div className="flex w-3/5 flex-col items-start justify-between rounded-b-xl px-3 py-2 text-gray-600 dark:text-gray-300">
                            <div className="flex w-full flex-col items-start gap-1 lg:gap-1.5">
                                <p ref={nameRef} className="line-clamp-2 text-base/5 font-semibold lg:text-base/5 dark:text-white">
                                    {product.product_variations[0].name}
                                </p>
                                <p
                                    className={`${
                                        descriptionClamp === 2
                                          ? 'line-clamp-2'
                                          : descriptionClamp === 3
                                          ? 'line-clamp-3'
                                          : ''
                                      } w-full overflow-hidden text-xs/3 lg:text-sm/5`}
                                >
                                    {product.product_variations[0].description}
                                </p>
                            </div>
                            <div className="flex w-full justify-between">
                                <p className="text-right text-sm font-bold text-gray-700 dark:text-gray-200">
                                    $
                                    {product.product_variations[0].price.toLocaleString()}
                                </p>
                                {product.product_variations.length > 1 && (
                                    <Copy className="h-5" />
                                )}
                            </div>
                        </div>

                        {imagePath && !imageError ? (
                            <img
                                className="h-full w-2/5 rounded-e-lg object-cover"
                                src={imagePath}
                            />
                        ) : (
                            <div className="flex h-full w-2/5 flex-col items-center justify-center rounded-e-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 23 24"
                                    className="h-16 text-gray-300 lg:h-24 xl:max-h-20 dark:text-neutral-700"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                                    ></path>
                                </svg>
                                <p className="px-2 text-center text-xs">
                                    Imagen no disponible
                                </p>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
