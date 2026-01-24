import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { uiCloseDrawer } from '../../redux/slices/uiSlice';
import { DrawerMessage } from './DrawerMessage';
import { DrawerHeader } from './DrawerHeader';
import { DrawerFooter } from './DrawerFooter';
import { AnimatePresence, motion } from 'framer-motion';
import Cart from '../../pages/modules/Cart';
import OrderEditCart from '../../pages/modules/OrderEditCart';
import { OrderSearch } from '../shared/OrderSearch';

export const Drawer = () => {
    const drawerRef = useRef<HTMLDivElement>(null);
    const {
        drawer: {
            drawerOpen,
            drawerFor,
            msg,
            size,
            orientation,
            typeMsg,
            className,
            msgTitle,
            drawerActions,
            hasCancelButton,
            onAccept,
            onClose,
            onCancel,
        },
    } = useAppSelector((state) => state.ui);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') dispatch(uiCloseDrawer());
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [dispatch]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (
            drawerRef.current &&
            !drawerRef.current.contains(event.target as Node)
        ) {
            dispatch(uiCloseDrawer());
            onClose?.();
            onCancel?.();
        }
    };

    const actions = () => {
        const actionsArr = Array.isArray(drawerActions)
            ? [...drawerActions]
            : [];
        if (onAccept) {
            actionsArr.unshift({
                label: 'Aceptar',
                action: onAccept,
                variant: 'primary',
            });
        }
        if (onCancel) {
            actionsArr.push({
                label: 'Cancelar',
                action: onCancel,
                variant: 'primary-outline',
            });
        }
        return actionsArr;
    };

    const orientations = {
        left: 'left-0 top-0 rounded-l-none',
        right: 'right-0 top-0 rounded-r-none',
        bottom: 'bottom-0 left-0 rounded-b-none',
        top: 'top-0 left-0 rounded-t-none',
    };
    const isHorizontal = orientation === 'left' || orientation === 'right';
    const sizes = {
        sm: isHorizontal
            ? 'sm:w-[35%] min-w-[35%] h-full'
            : 'sm:h-[35%] min-h-[35%] w-full',
        md: isHorizontal
            ? 'sm:w-[50%] min-w-[50%] h-full'
            : 'sm:h-[50%] min-h-[50%] w-full',
        lg: isHorizontal
            ? 'sm:w-[75%] min-w-[75%] h-full'
            : 'sm:h-[75%] min-h-[75%] w-full',
        full: 'h-full w-full rounded-none',
    };

    const variants = {
        left: { hidden: { x: '-100%' }, visible: { x: 0 } },
        right: { hidden: { x: '100%' }, visible: { x: 0 } },
        top: { hidden: { y: '-100%' }, visible: { y: 0 } },
        bottom: { hidden: { y: '100%' }, visible: { y: 0 } },
    };

    return (
        <AnimatePresence>
            {drawerOpen && (
                <div
                    className="fixed inset-0 z-20 flex h-full w-full items-center justify-center bg-black/30 backdrop-blur-sm"
                    onClick={handleOverlayClick}
                >
                    <div className="relative h-full w-full">
                        <motion.div
                            ref={drawerRef}
                            className={`absolute overflow-y-auto rounded-lg bg-white ${className} shadow-lg ${orientations[orientation || 'right']} ${sizes[size || 'md']} dark:border-[1px] dark:border-neutral-800 dark:bg-neutral-900`}
                            variants={variants[orientation || 'right']}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <DrawerHeader
                                close={() => {
                                    dispatch(uiCloseDrawer());
                                    onClose?.();
                                    onCancel?.();
                                }}
                            />
                            <div className="p-4 bg-white dark:bg-neutral-900">
                                {drawerFor === 'message' && (
                                    <DrawerMessage
                                        msg={msg || ''}
                                        typeMsg={typeMsg || 'success'}
                                        close={() => dispatch(uiCloseDrawer())}
                                        title={msgTitle || ''}
                                        hasCancelButton={false}
                                    />
                                )}
                                {drawerFor === 'action' && (
                                    <DrawerMessage
                                        msg={msg || ''}
                                        typeMsg={typeMsg || 'success'}
                                        close={() => dispatch(uiCloseDrawer())}
                                        title={msgTitle || ''}
                                        actions={drawerActions || []}
                                        hasCancelButton={hasCancelButton}
                                        onCancel={onCancel}
                                        onAccept={onAccept as () => void}
                                    />
                                )}
                                {drawerFor === 'cart' && <Cart />}
                                {drawerFor === 'edit_cart' && <OrderEditCart />}
                                {drawerFor === 'search_order' && <OrderSearch closeAction="drawer" />}
                            </div>
                            {drawerFor !== 'action' && actions().length > 0 && (
                                <DrawerFooter actions={actions()} />
                            )}
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};
