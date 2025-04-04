
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Modal, ModalPayload } from '../../types/ui';

interface UiSlice {
    modal: Modal;
    menuOpen: boolean;
    isLoading: boolean;
}

const initialState: UiSlice = {
    modal: {
        modalFor: null,
        modalOpen: false,
        modalTitle: '',
        typeMsg: null,
        msg: '',
        msgTitle: '',
        modalActions: []
    },
    menuOpen: false,
    isLoading: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        uiMenu(state, action: PayloadAction<boolean>) {
            state.menuOpen = action.payload
        },
        uiSetLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        uiModal(state, action: PayloadAction<ModalPayload>) {
            state.modal.modalOpen = true
            state.modal.modalFor = action.payload.modalFor
            state.modal.modalTitle = action.payload.modalTitle || ''
            state.modal.typeMsg = action.payload.typeMsg || null
            state.modal.msg = action.payload.msg || ''
            state.modal.msgTitle = action.payload.msgTitle || ''
            state.modal.modalActions = action.payload.modalActions || []
        },
        uiCloseModal(state) {
            state.modal = initialState.modal;
        },
    }
});

export const {
    uiMenu,
    uiSetLoading,
    uiModal,
    uiCloseModal,
} = uiSlice.actions;

export default uiSlice.reducer;
