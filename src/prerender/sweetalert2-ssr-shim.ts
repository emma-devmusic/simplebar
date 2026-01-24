/**
 * SSR Shim for sweetalert2
 * This file provides a no-op implementation for server-side rendering
 */

/* eslint-disable @typescript-eslint/no-explicit-any */

// Mock Swal for SSR
const Swal: any = {
    fire: () => Promise.resolve({ isConfirmed: false }),
    mixin: () => Swal,
    isVisible: () => false,
    close: () => {},
    clickConfirm: () => {},
    clickCancel: () => {},
    showLoading: () => {},
    hideLoading: () => {},
    enableLoading: () => {},
    disableLoading: () => {},
    getTitle: () => null,
    getHtmlContainer: () => null,
    getFooter: () => null,
    getPopup: () => null,
    getActions: () => null,
    getConfirmButton: () => null,
    getCancelButton: () => null,
};

export default Swal;
