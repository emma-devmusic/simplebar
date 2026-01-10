import { useAppDispatch, useAppSelector } from '../../redux/store';
import { uiCloseModal } from '../../redux/slices/uiSlice';
import { ModalHeader } from './ModalHeader';
import { ProductModal } from '../../views/modules/ProductModal';
import OffsetCanvas from '../offser-canvas/OffsetCanvas';
import { ModalMessage } from './ModalMessage';
import { useViewportHeight } from '../../hooks/useViewportHeight';
import { motion } from 'framer-motion';

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
            <motion.div
                className="animate-all flex w-[95vw] max-w-[95vw] flex-col rounded-lg bg-white shadow-2xl transition-all md:w-140 md:max-w-140 xl:w-156 xl:max-w-156 dark:border-[1px] dark:border-neutral-800 dark:bg-neutral-900"
                id="modal-content"
                style={{ maxHeight: 'calc(var(--vh, 1vh) * 95)' }}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                layout="size"
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
                </div>
                <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-10 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-neutral-900 dark:via-neutral-900/50" />
            </motion.div>
        </OffsetCanvas>
    );
};
