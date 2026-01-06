import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
const Home = React.lazy(() => import('../page/home'));
const Login = React.lazy(() => import('../page/login'));
const PageNotFound = React.lazy(() => import('../page/404'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "*",
        element: <PageNotFound />
    }
])

export default router;