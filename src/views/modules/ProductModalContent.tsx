import { Button } from '../../components';
import { ProductVariation } from '../../types/product';
import { Minus, Plus } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useEffect, useState, useMemo } from 'react';
import {
    addOrUpdateProduct,
    removeProduct,
} from '../../redux/slices/cartSlice';
import { addNewProduct, removeNewProduct } from '../../redux/slices/orderSlice';
import { uiCloseModal } from '../../redux/slices/uiSlice';
import useValidateImage from '../../hooks/useValidateImage';
import { useParams } from 'react-router-dom';
import {
    findProductInList,
    getMainImage,
    isProductInList,
    isProductWithSameQuantity,
} from '../../common/helpers/products';

interface ProductModalContentProps {
    productVariation: ProductVariation;
}

const ProductModalContent = ({
    productVariation,
}: ProductModalContentProps) => {
    const { cartProducts } = useAppSelector((state) => state.cart);
    const { currentOrder, newProducts } = useAppSelector(
        (state) => state.order
    );
    const { selectedProduct, variationSelected } = useAppSelector(
        (state) => state.products
    );
    const { tenant_path, branch_path } = useParams();
    const dispatch = useAppDispatch();

    const currentCart = useMemo(() => {
        if (!tenant_path || !branch_path) return [];
        return cartProducts[`${tenant_path}_${branch_path}`] || [];
    }, [cartProducts, tenant_path, branch_path]);

    const { imagePath, setImagePath, imageError } = useValidateImage({
        initialPath: '',
    });
    const [quantity, setQuantity] = useState<number>(1);

    const activeList = currentOrder ? newProducts : currentCart;

    const handleAddProduct = (productVariation: ProductVariation) => {
        const shouldRemove =
            isProductInList(activeList, productVariation.id) && quantity === 0;

        if (currentOrder) {
            if (shouldRemove) {
                dispatch(removeNewProduct(productVariation.id));
            } else {
                dispatch(
                    addNewProduct({ product: productVariation, quantity })
                );
            }
        } else {
            if (!tenant_path || !branch_path) return;
            if (shouldRemove) {
                dispatch(
                    removeProduct({
                        tenant_path,
                        branch_path,
                        productId: productVariation.id,
                    })
                );
            } else {
                dispatch(
                    addOrUpdateProduct({
                        tenant_path,
                        branch_path,
                        product: productVariation,
                        quantity,
                    })
                );
            }
        }
        dispatch(uiCloseModal());
    };

    const handleQuantity = (newQuantity: number) => {
        setQuantity(newQuantity <= 0 ? 0 : newQuantity);
    };

    const isRemovingProduct =
        isProductInList(activeList, productVariation.id) && quantity === 0;
    const hasQuantityChanged =
        isProductInList(activeList, productVariation.id) &&
        !isProductWithSameQuantity(activeList, productVariation.id, quantity);
    const buttonLabel =
        isRemovingProduct || hasQuantityChanged
            ? 'Guardar cambios'
            : 'Agregar producto';

    const isButtonDisabled =
        isProductWithSameQuantity(activeList, productVariation.id, quantity) ||
        (!isProductInList(activeList, productVariation.id) && quantity === 0);

    useEffect(() => {
        const currentVariation =
            selectedProduct?.product_variations[variationSelected];
        const itemInList = findProductInList(
            activeList,
            currentVariation?.id ?? 0
        );

        setQuantity(itemInList?.quantity ?? 1);

        if (currentVariation) {
            setImagePath(getMainImage(currentVariation));
        }
    }, [
        variationSelected,
        currentOrder,
        newProducts,
        currentCart,
        selectedProduct,
        setImagePath,
        activeList,
    ]);

    useEffect(() => {
        const currentVariation =
            selectedProduct?.product_variations[variationSelected];
        if (currentVariation) {
            setImagePath(getMainImage(currentVariation));
        }
    }, []);

    return (
        <div className="flex min-h-full w-full flex-col items-center justify-between gap-4 gap-y-3 p-2.5">
            {imagePath && !imageError ? (
                <img
                    src={imagePath}
                    className="h-42 self-center justify-self-center rounded-lg"
                    alt={productVariation.name}
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
                        />
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
                <p className="self-start justify-self-start text-sm">
                    {productVariation.description}
                </p>
            </div>

            <div className="mt-1 flex w-full justify-between">
                <div className="flex">
                    <Button
                        action={() => handleQuantity(quantity - 1)}
                        label=""
                        className="!disabled:border !w-7 rounded-e-none"
                        disabled={quantity <= 0}
                        icon={<Minus className="w-5" strokeWidth={4} />}
                        variant="primary"
                        size="sm"
                    />
                    <input
                        type="number"
                        value={quantity}
                        min={0}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="!rounded-0 !rounded-x-none !w-10 border border-x-0 border-primary px-2 pt-0.5 text-right text-sm !shadow-none focus:!rounded-none focus:border-2 focus:border-x-0 focus:border-primary focus:outline-0 md:!w-12"
                    />
                    <Button
                        action={() => handleQuantity(quantity + 1)}
                        label=""
                        className="!w-7 rounded-s-none"
                        icon={<Plus className="w-5" strokeWidth={4} />}
                        variant="primary"
                        size="sm"
                    />
                </div>
                <Button
                    action={() => handleAddProduct(productVariation)}
                    label={buttonLabel}
                    variant="primary"
                    disabled={isButtonDisabled}
                    type="button"
                    size="sm"
                    className="!px-1 !py-2 min-[325px]:!px-2.5"
                />
            </div>
        </div>
    );
};

export default ProductModalContent;
