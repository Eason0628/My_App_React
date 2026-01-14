import React from 'react';
import RequireAuth from '../util/RequireAuth';
import { RouteObject } from 'react-router-dom'

const Home = React.lazy(() => import('../page/home'));
const Login = React.lazy(() => import('../page/login'));
const PageNotFound = React.lazy(() => import('../page/404'));

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <RequireAuth allowed={true} redirectTo="/login"> <Home /> </RequireAuth>
//     },
//     {
//         path: "/login",
//         element: <RequireAuth allowed={false} redirectTo="/"> <Login /> </RequireAuth>
//     },
//     {
//         path: "*",
//         element: <PageNotFound />
//     }
// ])

export const initRoutes: RouteObject[] = [
    {
        path: "/",
        element: <RequireAuth allowed={true} redirectTo="/login"> <Home /> </RequireAuth>
    },
    {
        path: "/login",
        element: <RequireAuth allowed={false} redirectTo="/"> <Login /> </RequireAuth>
    },
    {
        path: "*",
        element: <PageNotFound />
    }
]
