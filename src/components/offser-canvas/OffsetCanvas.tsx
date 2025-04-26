import React, { useRef, useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { toggleSidebar, uiCloseModal } from '../../redux/slices/uiSlice';

interface OffsetCanvasProps {
    children: React.ReactNode,
    className?: string
}

const OffsetCanvas = ({ children, className = "" }: OffsetCanvasProps) => {

    const canvasRef = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                dispatch(uiCloseModal());
                dispatch(toggleSidebar());
            };
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [dispatch]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (
            canvasRef.current &&
            !canvasRef.current.contains(event.target as Node)
        ) {
            dispatch(uiCloseModal());
            dispatch(toggleSidebar())
        }
    };

    return (
        <div
            className={`${className} fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm`}
            onClick={handleOverlayClick}
        >
            <div
                ref={canvasRef}
            >
                {children}
            </div>
        </div>
    );
};

export default OffsetCanvas;