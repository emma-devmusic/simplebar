import { ProductVariation } from '../../types/product';

export const findProductInList = (
    list: { product: { id: number }; quantity: number }[],
    productId: number
) => list.find((item) => item.product.id === productId);

export const isProductInList = (
    list: { product: { id: number } }[],
    productId: number
) => list.some((item) => item.product.id === productId);

export const isProductWithSameQuantity = (
    list: { product: { id: number }; quantity: number }[],
    productId: number,
    quantity: number
) =>
    list.some(
        (item) => item.product.id === productId && item.quantity === quantity
    );

export const getMainImage = (productVariation: ProductVariation) => {
    const mainImg = productVariation.productImages.find(
        (img) => img.main_image
    );
    return mainImg?.url_image ?? productVariation.productImages[0]?.url_image;
};
