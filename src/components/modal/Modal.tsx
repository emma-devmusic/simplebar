import { useAppDispatch, useAppSelector } from '../../redux/store';
import { uiCloseModal } from '../../redux/slices/uiSlice';
import { ModalHeader } from './ModalHeader';
import { ProductModal } from '../../views/modules/ProductModal';
import Cart from '../../pages/modules/Cart';
import OffsetCanvas from '../offser-canvas/OffsetCanvas';

export const Modal = () => {
    const {
        modal: { modalOpen, modalFor },
    } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    if (!modalOpen) return null;

    return (
            <OffsetCanvas className='!backdrop-blur-md'>
                <div className='animate-fade-in w-96 max-w-96 rounded-lg shadow-2xl bg-white transition-all'>
                    <ModalHeader close={() => dispatch(uiCloseModal())} />
                    <div className="p-4">
                        {(modalFor === 'add_product' ||
                            modalFor === 'edit_product') && <ProductModal />}
                        {modalFor === 'cart' && <Cart />}
                    </div>
                </div>
            </OffsetCanvas>
    );
};
