import Providers from './Providers.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.tsx';
import './assets/styles/main.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers>
            <RouterProvider router={router} />
        </Providers>
    </StrictMode>
);
