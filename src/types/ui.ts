import { ReactElement } from "react";

export interface ModalMsg {
    typeMsg?: null | 'error' | 'info' | 'success' | 'warning' | 'spinner';
    msg?: null | string | ReactElement;
}

export interface Modal {
    modalFor:
    | null
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
    | 'edit_user';
    modalOpen: boolean;
    modalTitle?: string;
    typeMsg?: null | 'error' | 'info' | 'success' | 'warning' | 'spinner';
    msg?: null | string | ReactElement;
}