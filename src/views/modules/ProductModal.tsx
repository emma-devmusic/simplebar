import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductVariation } from '../../types/product';
import Slider from 'react-slick';
import ProductModalContent from './ProductModalContent';
import { setVariationSelected } from '../../redux/slices/productSlice';

export const ProductModal = () => {
    const { selectedProduct, variationSelected } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch()
    const {
        modal: { modalFor },
    } = useAppSelector((state) => state.ui);
    const slider = useRef<Slider | null>(null);

    var settings = {
        dots: true,
        infinite:
            selectedProduct && selectedProduct?.product_variations?.length > 1
                ? true
                : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div
            className={`relative h-full ${selectedProduct && selectedProduct?.product_variations?.length > 1 && 'p-4'}`}
        >
            {modalFor === 'add_product' && selectedProduct ? (
                <Slider
                    className="min-h-80 w-full"
                    ref={slider}
                    {...settings}
                    afterChange={(number: number) => {
                        dispatch(setVariationSelected(number));
                    }}
                >
                    {selectedProduct &&
                        selectedProduct.product_variations.map(
                            (
                                productVariation: ProductVariation,
                                index: number
                            ) => {
                                 return (
                                <ProductModalContent
                                    key={index}
                                    productVariation={productVariation}
                                />
                            )}
                        )}
                </Slider>
            ) : (selectedProduct && (
                <ProductModalContent
                    productVariation={selectedProduct.product_variations[variationSelected]}
                />
            ))}
            {selectedProduct && modalFor === 'add_product' &&
                selectedProduct?.product_variations?.length > 1 && (
                    <button
                        className="absolute top-1/2 -left-1.5 -translate-y-1/1 transform cursor-pointer rounded-full bg-black/50 p-0.5 pr-1 text-white hover:bg-black/75"
                        onClick={() => {
                            slider.current?.slickPrev();
                        }}
                    >
                        <ChevronLeft />
                    </button>
                )}

            {selectedProduct && modalFor === 'add_product' &&
                selectedProduct?.product_variations?.length > 1 && (
                    <button
                        className="absolute top-1/2 -right-1.5 -translate-y-1/1 transform cursor-pointer rounded-full bg-black/50 p-0.5 pl-1 text-white hover:bg-black/75"
                        onClick={() => {
                            slider.current?.slickNext();
                        }}
                    >
                        <ChevronRight />
                    </button>
                )}
        </div>
    );
};
