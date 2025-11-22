import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ReactNode } from 'react';
import { ThemeProvider } from './common/contexts/ThemeContext';

function Providers({ children }: { children: ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Provider>
    );
}

export default Providers;
