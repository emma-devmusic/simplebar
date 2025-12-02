import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './assets/styles/main.css';
import { router } from './routes.tsx';
import Providers from './Providers.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <Providers>
                <RouterProvider router={router} />
            </Providers>
        </HelmetProvider>
    </StrictMode>
);
