/**
 * SSR Shim for react-router-dom
 * This file provides a minimal implementation of RouterProvider for server-side rendering
 * during the prerender build step. It prevents errors when importing components that use
 * react-router-dom hooks in an SSR context.
 */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ReactElement } from 'react';

// Mock RouterProvider for SSR context
export function RouterProvider(_props: { router: any }): ReactElement {
    // During SSR, we just return a placeholder
    // The actual routing happens client-side
    return null as any;
}

// Mock router creation functions
export function createBrowserRouter(_routes: any[], _options?: any) {
    return { routes: _routes, options: _options };
}

export function createMemoryRouter(_routes: any[], _options?: any) {
    return { routes: _routes, options: _options };
}

// Mock navigation hooks - these will be replaced client-side
export function useNavigate() {
    return () => {};
}

export function useParams() {
    return {};
}

export function useLocation() {
    return { pathname: '', search: '', hash: '', state: null };
}

export function useSearchParams() {
    return [new URLSearchParams(), () => {}];
}

// Mock components
export function Link(_props: any) {
    return null as any;
}

export function NavLink(_props: any) {
    return null as any;
}

export function Navigate(_props: any) {
    return null as any;
}

export function Outlet() {
    return null as any;
}
