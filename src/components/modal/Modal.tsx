import { useAppDispatch, useAppSelector } from '../../redux/store';
import { uiCloseModal } from '../../redux/slices/uiSlice';
import { ModalHeader } from './ModalHeader';
import { ProductModal } from '../../views/modules/ProductModal';
import Cart from '../../pages/modules/Cart';
import OffsetCanvas from '../offser-canvas/OffsetCanvas';
import { ModalMessage } from './ModalMessage';
import { useViewportHeight } from '../../hooks/useViewportHeight';

export const Modal = () => {
    const {
        modal: { modalOpen, modalFor, msg, typeMsg, msgTitle },
    } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    // Ajusta la variable CSS --vh para reflejar el alto real del viewport en móviles
    useViewportHeight();

    if (!modalOpen) return null;

    return (
        <OffsetCanvas className="!backdrop-blur-md">
            <div
                className="animate-fade-in flex w-96 max-w-[95vw] flex-col rounded-lg bg-white shadow-2xl transition-all lg:w-128 lg:max-w-128 dark:border-[1px] dark:border-neutral-800 dark:bg-neutral-900"
                id="modal-content"
                style={{ maxHeight: 'calc(var(--vh, 1vh) * 95)' }}
            >
                <ModalHeader close={() => dispatch(uiCloseModal())} />

                <div className="h-full overflow-y-auto p-4" id="modal-body">
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
                <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-neutral-900 dark:via-neutral-900/50" />
            </div>
        </OffsetCanvas>
    );
};
