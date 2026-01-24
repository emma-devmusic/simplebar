import { createBrowserRouter } from 'react-router-dom';
import {
    Dash,
    ErrorPage,
    WelcomePage,
    MenuWelcome,
    TermsAndConditions,
    PrivacyPolicy,
} from './pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage />,
    },
    {
        path: '/terms-and-conditions',
        element: <TermsAndConditions />,
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
    },
    {
        path: ':tenant_path',
        element: <MenuWelcome />,
        children: [
            {
                path: ':branch_path',
                element: <Dash />,
            },
            {
                path: ':branch_path/:order_number',
                element: <Dash />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
