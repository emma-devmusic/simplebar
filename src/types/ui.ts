import { ReactElement } from 'react';
import { ButtonProps } from '../components/buttons/Button';

export type Size = 'sm' | 'md' | 'lg';

export interface ModalMsg {
    typeMsg?: null | 'error' | 'info' | 'success' | 'warning' | 'spinner';
    msg?: null | string | ReactElement;
}

export interface Modal {
    modalFor: ModalFor | null;
    modalOpen: boolean;
    modalTitle?: string;
    typeMsg?: null | ModalTypeMessage;
    msg?: string;
    msgTitle?: string;
    modalActions?: ActionButton[];
}

export interface ModalPayload {
    modalFor: ModalFor;
    modalTitle?: string;
    typeMsg?: ModalTypeMessage;
    msg?: string;
    msgTitle?: string;
    modalActions?: ActionButton[];
}

export type ModalFor =
    | 'validate_code'
    | '2F_code'
    | 'new_product'
    | 'message'
    | 'loading'
    | 'edit_image_profile'
    | 'validate_new_email'
    | '2F_code_change'
    | 'verify_account'
    | 'audit_document'
    | 'audit_user'
    | 'category'
    | 'categoryInfo'
    | 'audit_product'
    | 'new_auction'
    | 'offers'
    | 'new_offer'
    | 'edit_auction'
    | 'new_user'
    | 'edit_user'
    | 'branch'
    | 'action'
    | 'add_product'
    | 'edit_product'
    | 'cart'
    | 'edit_cart';

export type ModalTypeMessage =
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'spinner';

export type ActionButton = ButtonProps;

export type DrawerFor = 'message' | 'action' | 'edit_cart' | 'cart';

export interface DrawerMsg {
    typeMsg?: null | 'error' | 'info' | 'success' | 'warning' | 'spinner';
    msg?: null | string | ReactElement;
}

export type DrawerSize = Size | 'full';

export interface Drawer {
    className?: string;
    drawerFor: DrawerFor | null;
    drawerOpen: boolean;
    drawerTitle?: string;
    typeMsg?: null | ModalTypeMessage;
    msg?: string;
    orientation?: 'left' | 'right' | 'bottom' | 'top';
    size?: DrawerSize;
    msgTitle?: string;
    drawerActions: ActionButton[];
    hasCancelButton: boolean;
    onAccept?: null | (() => void);
    onClose?: null | (() => void);
    onCancel?: null | (() => void);
    data?: unknown;
}

export interface DrawerPayload {
    className?: string;
    drawerFor: DrawerFor;
    drawerTitle?: string;
    typeMsg?: ModalTypeMessage;
    msg?: string;
    orientation?: 'left' | 'right' | 'bottom' | 'top';
    size?: DrawerSize;
    msgTitle?: string;
    drawerActions?: ActionButton[];
    hasCancelButton?: boolean;
    data?: unknown;
    onAccept?: null | (() => void);
    onClose?: null | (() => void);
    onCancel?: null | (() => void);
}
