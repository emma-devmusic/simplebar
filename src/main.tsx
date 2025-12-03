import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './assets/styles/main.css';
import { router } from './routes.tsx';
import Providers from './Providers.tsx';

const rootElement = document.getElementById('root')!;

// Clear any prerendered content to avoid hydration issues
// The prerendered HTML is only for SEO crawlers
if (rootElement.innerHTML.trim().length > 0) {
    rootElement.innerHTML = '';
}

// Now render the full React app with routing
createRoot(rootElement).render(
    <StrictMode>
        <HelmetProvider>
            <Providers>
                <RouterProvider router={router} />
            </Providers>
        </HelmetProvider>
    </StrictMode>
);
