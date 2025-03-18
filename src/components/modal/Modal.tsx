import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { uiCloseModal } from '../../redux/slices/uiSlice';
import { ModalHeader } from './ModalHeader';
import { ProductModal } from '../../views/modules/ProductModal';
import Cart from '../../pages/modules/Cart';

export const Modal = () => {
    const modalRef = useRef<HTMLDivElement>(null);

    const {
        modal: { modalOpen, modalFor },
    } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') dispatch(uiCloseModal());
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [dispatch]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            dispatch(uiCloseModal());
        }
    };

    if (!modalOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className="animate-fade-in w-full max-w-lg scale-95 rounded-lg bg-white shadow-lg transition-all"
            >
                <ModalHeader close={() => dispatch(uiCloseModal())} />
                <div className="p-4">
                    {(modalFor === 'add_product' ||
                        modalFor === 'edit_product') && <ProductModal />}
                    {modalFor === 'cart' && <Cart />}
                </div>
            </div>
        </div>
    );
};
