import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, WelcomePage } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    }
]);