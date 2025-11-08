import { useAppDispatch, useAppSelector } from '../../redux/store';
import { uiCloseModal } from '../../redux/slices/uiSlice';
import { ModalHeader } from './ModalHeader';
import { ProductModal } from '../../views/modules/ProductModal';
import Cart from '../../pages/modules/Cart';
import OffsetCanvas from '../offser-canvas/OffsetCanvas';
import { ModalMessage } from './ModalMessage';

export const Modal = () => {
    const {
        modal: { modalOpen, modalFor, msg, typeMsg, msgTitle },
    } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    if (!modalOpen) return null;

    return (
        <OffsetCanvas className="!backdrop-blur-md">
            <div className="animate-fade-in max-h-[95vh] w-96 max-w-[95vw] overflow-y-auto rounded-lg bg-white shadow-2xl transition-all lg:w-128 lg:max-w-128">
                <ModalHeader close={() => dispatch(uiCloseModal())} />
                <div className="p-4">
                    {(modalFor === 'add_product' ||
                        modalFor === 'edit_product') && <ProductModal />}
                    {modalFor === 'message' && (
                        <ModalMessage
                            msg={msg || ''}
                            typeMsg={typeMsg || 'success'}
                            close={() => dispatch(uiCloseModal())}
                            title={msgTitle || ''}
                            hasCancelButton={false}
                        />
                    )}
                    {modalFor === 'cart' && <Cart />}
                </div>
            </div>
        </OffsetCanvas>
    );
};
