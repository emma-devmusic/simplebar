import { Button } from '../../components';
import { ProductVariation } from '../../types/product';
import { Minus, Plus } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useEffect, useState } from 'react';
import {
    addOrUpdateProduct,
    removeProduct,
} from '../../redux/slices/cartSlice';
import { uiCloseModal } from '../../redux/slices/uiSlice';
import useValidateImage from '../../hooks/useValidateImage';

interface ProductModalContentProps {
    productVariation: ProductVariation;
}

const ProductModalContent = ({
    productVariation,
}: ProductModalContentProps) => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const { imagePath, setImagePath, imageError } = useValidateImage({
        initialPath: '',
    });
    const dispatch = useAppDispatch();
    const [quantity, setQuantity] = useState<number>(0);
    const { selectedProduct, variationSelected } = useAppSelector(
        (state) => state.products
    );

    const handleAddProduct = (productVariation: ProductVariation) => {
        {
            if (
                cartProducts.some(
                    (item) => productVariation?.id === item.product.id
                ) &&
                quantity === 0 &&
                selectedProduct
            ) {
                dispatch(removeProduct(productVariation.id));
            } else {
                dispatch(
                    addOrUpdateProduct({ product: productVariation, quantity })
                );
            }
            dispatch(uiCloseModal());
        }
    };

    const handleQuantity = (quantity: number) => {
        if (quantity <= 0) {
            setQuantity(0);
        } else {
            setQuantity(quantity);
        }
    };

    useEffect(() => {
        if (
            cartProducts.some(
                (item) =>
                    item.product.id ===
                    selectedProduct?.product_variations[variationSelected]?.id
            )
        ) {
            setQuantity(
                cartProducts.find(
                    (item) =>
                        item.product.id ===
                        selectedProduct?.product_variations[variationSelected]
                            .id
                )?.quantity ?? 0
            );
        } else {
            setQuantity(0);
        }

        if (selectedProduct) {
            if (
                selectedProduct.product_variations[
                    variationSelected
                ]?.productImages.some((img) => img.main_image)
            ) {
                const imagePath = selectedProduct.product_variations[
                    variationSelected
                ]?.productImages.find((img) => img.main_image)
                    ?.url_image as string;
                setImagePath(imagePath);
            } else {
                const imagePath =
                    selectedProduct.product_variations[variationSelected]
                        ?.productImages[0]?.url_image;
                setImagePath(imagePath);
            }
        }
    }, [variationSelected]);

    useEffect(() => {
        if (selectedProduct) {
            if (
                selectedProduct.product_variations[
                    variationSelected
                ]?.productImages.some((img) => img.main_image)
            ) {
                const imagePath = selectedProduct.product_variations[
                    variationSelected
                ]?.productImages.find((img) => img.main_image)
                    ?.url_image as string;
                setImagePath(imagePath);
            } else {
                const imagePath =
                    selectedProduct.product_variations[variationSelected]
                        ?.productImages[0]?.url_image;
                setImagePath(imagePath);
            }
        }
    }, []);

    return (
        <div className="flex min-h-full w-full flex-col items-center justify-between gap-4 gap-y-3 p-2.5">
            {imagePath && !imageError ? (
                <img
                    src={imagePath ?? ''}
                    className="h-42 self-center justify-self-center rounded-lg"
                />
            ) : (
                <div className="flex h-42 w-full flex-col items-center justify-center rounded-e-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-42 text-gray-300"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M18.06 23h1.66c.84 0 1.53-.65 1.63-1.47L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26c1.44 1.42 2.43 2.89 2.43 5.29zM1 22v-1h15.03v1c0 .54-.45 1-1.03 1H2c-.55 0-1-.46-1-1m15.03-7C16.03 7 1 7 1 15zM1 17h15v2H1z"
                        ></path>
                    </svg>
                    <p className="text-sm">Imagen no disponible</p>
                </div>
            )}
            <div className="flex w-full flex-col gap-y-2">
                <div className="w-full">
                    <p className="text-xl font-bold">{productVariation.name}</p>
                    <p className="font-bold text-primary">
                        ${productVariation.price.toLocaleString()}
                    </p>
                </div>
                <p className="self-start justify-self-start">
                    {productVariation.description}
                </p>
            </div>
            <div className="flex w-full justify-between">
                <div className="flex">
                    <Button
                        action={() => {
                            handleQuantity(quantity - 1);
                        }}
                        label=""
                        className="!disabled:border !w-8 rounded-e-none"
                        disabled={quantity <= 0}
                        icon={<Minus className="w-5" strokeWidth={4} />}
                        variant="primary"
                    />
                    <input
                        type="number"
                        value={quantity}
                        min={0}
                        onChange={(e) => {
                            setQuantity(Number(e.target.value));
                        }}
                        name=""
                        className="!rounded-0 !rounded-x-none !w-10 border border-x-0 border-primary px-2 pt-1 text-right !shadow-none focus:!rounded-none focus:border-2 focus:border-x-0 focus:border-primary focus:outline-0 md:!w-16"
                    />
                    <Button
                        action={() => handleQuantity(quantity + 1)}
                        label=""
                        className="!w-8 rounded-s-none"
                        icon={<Plus className="w-5" strokeWidth={4} />}
                        variant="primary"
                    />
                </div>
                <Button
                    action={() => handleAddProduct(productVariation)}
                    label={
                        (cartProducts.some(
                            (item) => productVariation.id === item.product.id
                        ) &&
                            quantity === 0) ||
                        cartProducts.some(
                            (item) =>
                                productVariation.id === item.product.id &&
                                quantity !== item.quantity
                        )
                            ? 'Guardar cambios'
                            : 'Agregar producto'
                    }
                    variant="primary"
                    disabled={
                        !cartProducts.some(
                            (item) => productVariation.id === item.product.id
                        ) && quantity === 0
                    }
                    type="button"
                    className="!px-1 !py-2 min-[325px]:!px-2.5"
                />
            </div>
        </div>
    );
};

export default ProductModalContent;
