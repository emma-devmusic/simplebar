import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from './common/contexts/ThemeContext';
import { useAppDispatch } from './redux/store';
import { loadAllCarts } from './redux/slices/cartSlice';

// Componente interno que carga el carrito desde localStorage al inicio
function CartInitializer() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const cart_state_json = localStorage.getItem('cart_state_v2');
        if (cart_state_json) {
            try {
                const cart_state = JSON.parse(cart_state_json);
                dispatch(loadAllCarts(cart_state));
            } catch (error) {
                console.error('Error loading cart from localStorage:', error);
            }
        }
    }, [dispatch]);

    return null;
}

function Providers({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <CartInitializer />
                {children}
            </ThemeProvider>
        </Provider>
    );
}

export default Providers;
