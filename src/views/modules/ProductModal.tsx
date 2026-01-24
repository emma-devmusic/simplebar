import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductVariation } from '../../types/product';
import Slider from 'react-slick';
import ProductModalContent from './ProductModalContent';
import { setVariationSelected } from '../../redux/slices/productSlice';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ProductModal = () => {
    const { selectedProduct, variationSelected } = useAppSelector(
        (state) => state.products
    );
    const [isImageTransitioning, setIsImageTransitioning] = useState(false);
    const dispatch = useAppDispatch();
    const {
        modal: { modalFor },
    } = useAppSelector((state) => state.ui);
    const slider = useRef<Slider | null>(null);

    const settings = {
        dots: true,
        infinite:
            selectedProduct && selectedProduct?.product_variations?.length > 1
                ? true
                : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (_current: number, next: number) => {
            dispatch(setVariationSelected(next));
        },
    };

    const shouldShowArrows =
        selectedProduct &&
        modalFor === 'add_product' &&
        selectedProduct?.product_variations?.length > 1;

    return (
        <div
            className={`relative h-full ${selectedProduct && selectedProduct?.product_variations?.length > 1 && 'p-4'}`}
        >
            {modalFor === 'add_product' && selectedProduct ? (
                <Slider
                    className="min-h-80 w-full"
                    ref={slider}
                    {...settings}
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
                                        isImageTransitioning={isImageTransitioning}
                                        setIsImageTransitioning={setIsImageTransitioning}
                                    />
                                );
                            }
                        )}
                </Slider>
            ) : (
                selectedProduct && (
                    <ProductModalContent
                        productVariation={
                            selectedProduct.product_variations[
                                variationSelected
                            ]
                        }
                    />
                )
            )}
            {shouldShowArrows && (
                <button
                    className="absolute top-1/2 -left-1.5 -translate-y-1/1 transform cursor-pointer rounded-full bg-black/50 p-0.5 pr-1 text-white hover:bg-black/75"
                    onClick={() => {
                        slider.current?.slickPrev();
                        setIsImageTransitioning(true);
                    }}
                >
                    <ChevronLeft />
                </button>
            )}

            {shouldShowArrows && (
                <button
                    className="absolute top-1/2 -right-1.5 -translate-y-1/1 transform cursor-pointer rounded-full bg-black/50 p-0.5 pl-1 text-white hover:bg-black/75"
                    onClick={() => {
                        slider.current?.slickNext();
                        setIsImageTransitioning(true);
                    }}
                >
                    <ChevronRight />
                </button>
            )}
        </div>
    );
};
