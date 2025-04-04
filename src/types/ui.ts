import { ReactElement } from "react";
import { ButtonProps } from "../components/buttons/Button";

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
    | 'cart';

export type ModalTypeMessage =
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'spinner';

export type ActionButton = ButtonProps