import { createBrowserRouter } from 'react-router-dom';
import { Dash, ErrorPage, WelcomePage, MenuWelcome } from './pages';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <WelcomePage />,
    },
    {
        path: ':tenant_path',
        element: <MenuWelcome />,
        children: [
            {
                path: ':branch_path',
                element: <Dash />,
            },
        ],
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
