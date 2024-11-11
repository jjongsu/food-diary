import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/home'));

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;
