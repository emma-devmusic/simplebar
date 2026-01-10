import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Modal, ModalPayload, Drawer, DrawerPayload } from '../../types/ui';

interface UiSlice {
    modal: Modal;
    drawer: Drawer;
    menuOpen: boolean;
    isLoading: boolean;
    sidebarOpen: boolean;
}

const initialState: UiSlice = {
    modal: {
        modalFor: null,
        modalOpen: false,
        modalTitle: '',
        typeMsg: null,
        msg: '',
        msgTitle: '',
        modalActions: [],
    },
    drawer: {
        className: '',
        drawerFor: null,
        drawerOpen: false,
        drawerTitle: '',
        typeMsg: null,
        msg: '',
        orientation: 'right',
        size: 'md',
        msgTitle: '',
        drawerActions: [],
        hasCancelButton: false,
        onAccept: null,
        onClose: null,
        onCancel: null,
        data: null,
    },
    menuOpen: false,
    isLoading: false,
    sidebarOpen: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        uiMenu(state, action: PayloadAction<boolean>) {
            state.menuOpen = action.payload;
        },
        uiSetLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        uiModal(state, action: PayloadAction<ModalPayload>) {
            state.modal.modalOpen = true;
            state.modal.modalFor = action.payload.modalFor;
            state.modal.modalTitle = action.payload.modalTitle || '';
            state.modal.typeMsg = action.payload.typeMsg || null;
            state.modal.msg = action.payload.msg || '';
            state.modal.msgTitle = action.payload.msgTitle || '';
            state.modal.modalActions = action.payload.modalActions || [];
        },
        uiCloseModal(state) {
            state.modal = initialState.modal;
        },
        uiDrawer(state, action: PayloadAction<DrawerPayload>) {
            const payload = action.payload;
            state.drawer = {
                className: payload.className || '',
                drawerOpen: true,
                drawerFor: payload.drawerFor,
                drawerTitle: payload.drawerTitle || '',
                typeMsg: payload.typeMsg || null,
                msg: payload.msg || '',
                orientation: payload.orientation || 'right',
                size: payload.size || 'md',
                msgTitle: payload.msgTitle || '',
                drawerActions: payload.drawerActions || [],
                hasCancelButton: payload.hasCancelButton ?? true,
                data: payload.data || null,
                onAccept: payload.onAccept || null,
                onClose: payload.onClose || null,
                onCancel: payload.onCancel || null,
            };
        },
        uiCloseDrawer(state) {
            state.drawer = initialState.drawer;
        },
        toggleSidebar(state) {
            state.sidebarOpen = !state.sidebarOpen;
        },
    },
});

export const {
    uiMenu,
    uiSetLoading,
    uiModal,
    uiCloseModal,
    uiDrawer,
    uiCloseDrawer,
    toggleSidebar,
} = uiSlice.actions;

export default uiSlice.reducer;
