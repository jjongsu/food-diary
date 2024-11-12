import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

const DiaryPage = lazy(() => import('./pages/diary'));
const ReportPage = lazy(() => import('./pages/report'));

function Router() {
    const router = createBrowserRouter([
        {
            path: '/diary',
            element: <DiaryPage />,
        },
        {
            path: '/report',
            element: <ReportPage />,
        },
    ]);
    return <RouterProvider router={router} />;
}

export default Router;
