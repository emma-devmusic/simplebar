import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { uiCloseModal } from "../../redux/slices/uiSlice";
import { ModalHeader } from "./ModalHeader";
import { UserModal } from "../../views/modules/Users/UserModal";


export const Modal = () => {
    const modalRef = useRef<HTMLDivElement>(null);

    const { modal: { modalOpen, modalFor } } = useAppSelector( state => state.ui)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") dispatch(uiCloseModal());
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [dispatch]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            dispatch(uiCloseModal());
        }
    };

    if (!modalOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50" onClick={handleOverlayClick}>
            <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-lg w-full transition-all scale-95 animate-fade-in">
                <ModalHeader close={() => dispatch(uiCloseModal())} />
                <div className="p-4">
                    {
                        modalFor === 'new_user' && <UserModal />
                    }
                    {
                        modalFor === 'edit_user' && <UserModal />
                    }
                </div>
            </div>
        </div>
    );
};